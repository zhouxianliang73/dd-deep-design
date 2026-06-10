"""Extract and prepare configurator images from 索而 price data"""
from PIL import Image
import os, hashlib

img_dir = r"E:\CAB3060\02-工作\设计中\dd-deep-design\assets\images"
out_dir = os.path.join(img_dir, "products", "suoer")
os.makedirs(out_dir, exist_ok=True)

# Unique suoer-price images (non-duplicate, non-header)
unique_images = {}
for f in sorted(os.listdir(img_dir)):
    if f.startswith("suoer-price-img") and (f.endswith('.png') or f.endswith('.jpg')):
        path = os.path.join(img_dir, f)
        with open(path, 'rb') as fh:
            h = hashlib.md5(fh.read()).hexdigest()
        if h not in unique_images:
            unique_images[h] = []
        unique_images[h].append(f)

# Print unique groups
print("Unique suoer-price image groups:")
for h, files in sorted(unique_images.items()):
    files_str = ", ".join(files)
    path = os.path.join(img_dir, files[0])
    with Image.open(path) as img:
        size = img.size
    print(f"  {files_str} -> {size} ({os.path.getsize(path)} bytes)")

# For each product variant, assign the most appropriate image
# 索而 products map: 8 products (4 xt + 4 wm)
# Images 9-17 are unique product images/diagrams (image 17 at 308x88 is probably a wide diagram)

# Mapping: 
# Image 9 (221x226): probably TH-XT-001-X (top-flip, 2200mm)
# Image 10 (221x215): probably TH-XT-001 (top-flip, 2900mm)
# Image 11 (221x180): probably TH-XT-002 (top-flip, 3200mm)
# Image 12 (221x173): probably TH-XT-003 (top-flip, 3500mm)
# Image 13 (221x162): probably TH-WM-001-X (rolling shutter, 2200mm)
# Image 14 (221x161): probably TH-WM-001 (rolling shutter, 2900mm)
# Image 15 (221x153): probably TH-WM-002 (rolling shutter, 3200mm)
# Image 16 (221x153): probably TH-WM-003 (rolling shutter, 3500mm)
# Image 17 (308x88): probably a wide diagram or header

mapping = {
    "xt-2200": "suoer-price-img-9.png",
    "xt-2900": "suoer-price-img-10.png",
    "xt-3200": "suoer-price-img-11.png",
    "xt-3500": "suoer-price-img-12.png",
    "wm-2200": "suoer-price-img-13.png",
    "wm-2900": "suoer-price-img-14.png",
    "wm-3200": "suoer-price-img-15.png",
    "wm-3500": "suoer-price-img-16.png",
}

print("\nGenerating configurator preview images:")
for variant, src_name in mapping.items():
    # Extract door type and width
    door, width = variant.split("-")
    door_label = "topflip" if door == "xt" else "rollshutter"
    out_name = f"suoer-{door_label}-{width}.png"
    
    src_path = os.path.join(img_dir, src_name)
    dst_path = os.path.join(out_dir, out_name)
    
    # Copy and upscale to a reasonable preview size (500px wide)
    with Image.open(src_path) as img:
        # Convert to RGB if needed
        if img.mode not in ('RGB', 'RGBA'):
            img = img.convert('RGB')
        # Upscale to 500px wide
        ratio = 500 / img.width
        new_size = (500, int(img.height * ratio))
        img_resized = img.resize(new_size, Image.LANCZOS)
        img_resized.save(dst_path, 'PNG')
    
    print(f"  {src_name} -> {out_name} ({new_size[0]}x{new_size[1]})")

print(f"\nDone! Images saved to {out_dir}")
