#!/usr/bin/env python3
"""
Remove white background from logo images, making them transparent.

Supports PNG and WebP formats.
Processes images in-place by default, or specify an output directory.

Usage:
    python scripts/remove_white_bg.py <image_or_dir> [--out-dir <dir>] [--threshold 240]

Examples:
    # Single file (overwrites in-place)
    python scripts/remove_white_bg.py public/images/logo.png

    # Entire directory (overwrites in-place)
    python scripts/remove_white_bg.py public/images/

    # Output to separate directory
    python scripts/remove_white_bg.py public/images/ --out-dir public/images/transparent/

    # Stricter threshold (only pure white removed)
    python scripts/remove_white_bg.py public/images/ --threshold 250

    # Looser threshold (removes near-white too)
    python scripts/remove_white_bg.py public/images/ --threshold 220
"""

import argparse
import os
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Error: Pillow is required. Install it with: pip install Pillow")
    sys.exit(1)


SUPPORTED_EXTENSIONS = {'.png', '.webp'}


def make_white_transparent(image_path: Path, output_path: Path, threshold: int = 240):
    """
    Convert white pixels to transparent.

    Pixels with R, G, B all >= threshold become fully transparent.
    Other pixels are left unchanged.
    """
    img = Image.open(image_path)

    # Ensure RGBA mode
    if img.mode == 'P':
        img = img.convert('RGBA')
    elif img.mode == 'RGB':
        img = img.convert('RGBA')
    elif img.mode == 'L':
        img = img.convert('RGBA')
    elif img.mode == 'LA':
        img = img.convert('RGBA')
    # RGBA, CMYK, etc. — convert anything else via RGBA too
    elif img.mode != 'RGBA':
        img = img.convert('RGBA')

    pixels = img.load()
    width, height = img.size

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # If all channels are at or above threshold, make transparent
            if r >= threshold and g >= threshold and b >= threshold:
                pixels[x, y] = (r, g, b, 0)

    # Determine save format from output extension
    ext = output_path.suffix.lower()
    if ext == '.webp':
        img.save(output_path, 'WEBP', lossless=True)
    else:
        img.save(output_path, 'PNG')

    # Count transparent pixels for summary
    total = width * height
    transparent = sum(1 for y in range(height) for x in range(width) if pixels[x, y][3] == 0)
    return total, transparent


def main():
    parser = argparse.ArgumentParser(
        description='Remove white backgrounds from logo images (PNG/WebP).'
    )
    parser.add_argument(
        'input',
        type=str,
        help='Image file or directory containing images to process.',
    )
    parser.add_argument(
        '--out-dir', '-o',
        type=str,
        default=None,
        help='Output directory. If omitted, images are overwritten in-place.',
    )
    parser.add_argument(
        '--threshold', '-t',
        type=int,
        default=240,
        help='Whiteness threshold (0-255). Pixels with R,G,B all >= this value become transparent. Default: 240.',
    )
    args = parser.parse_args()

    input_path = Path(args.input).resolve()

    if not input_path.exists():
        print(f"Error: '{input_path}' does not exist.")
        sys.exit(1)

    # Collect files to process
    if input_path.is_file():
        if input_path.suffix.lower() not in SUPPORTED_EXTENSIONS:
            print(f"Error: Unsupported format '{input_path.suffix}'. Only PNG and WebP are supported.")
            sys.exit(1)
        files = [input_path]
    elif input_path.is_dir():
        files = sorted(
            f for f in input_path.iterdir()
            if f.is_file() and f.suffix.lower() in SUPPORTED_EXTENSIONS
        )
        if not files:
            print(f"No PNG or WebP files found in '{input_path}'.")
            sys.exit(0)
    else:
        print(f"Error: '{input_path}' is not a file or directory.")
        sys.exit(1)

    # Determine output directory
    if args.out_dir:
        out_dir = Path(args.out_dir).resolve()
        out_dir.mkdir(parents=True, exist_ok=True)
    else:
        out_dir = None  # in-place

    print(f"Processing {len(files)} file(s) with threshold {args.threshold}...")
    print()

    for f in files:
        if out_dir:
            # Preserve original extension
            output = out_dir / f.name
        else:
            output = f

        total, transparent = make_white_transparent(f, output, args.threshold)
        pct = (transparent / total) * 100
        action = "→" if out_dir else "←"
        print(f"  {f.name} {action} {output.name}  ({transparent}/{total} pixels cleared, {pct:.1f}%)")

    print()
    print(f"Done. {len(files)} file(s) processed.")


if __name__ == '__main__':
    main()
