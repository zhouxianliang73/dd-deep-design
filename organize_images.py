"""Organize hot-selling product images"""
import os, shutil, hashlib

img_dir = r"E:\CAB3060\02-工作\设计中\dd-deep-design\assets\images"
hot_dir = os.path.join(img_dir, "products", "hot-selling")
os.makedirs(hot_dir, exist_ok=True)

# Group unique images by product set with cleaner naming
# The original file naming per sheet was sequential, but many are company logo duplicates
# Key unique product photos (by file size desc, skip 344KB logo duplicates):

# Let's find unique large images for each product set by looking at what remains after removing the 344KB logo
files = sorted([f for f in os.listdir(img_dir) if f.endswith('.png') or f.endswith('.jpg')])

# Check which large images are unique per sheet
from collections import defaultdict
hash_to_files = defaultdict(list)
for f in files:
    path = os.path.join(img_dir, f)
    with open(path, 'rb') as fh:
        h = hashlib.md5(fh.read()).hexdigest()
    hash_to_files[h].append(f)

# Build unique image mapping
# Map: unique_image_filename -> (product_set, description)
# We'll keep the cleanest image for each product set

# Product set images (first image in each sheet is company logo - skip it)
product_images = {
    # US MK Series (8-piece set)
    "us-mk-series-01.png": "美标MK系列KD结构-img-2.png",   # Sink cabinet
    "us-mk-series-02.png": "美标MK系列KD结构-img-3.png",   # Appliance cabinet
    "us-mk-series-03.png": "美标MK系列KD结构-img-4.png",   # BBQ
    "us-mk-series-04.png": "美标MK系列KD结构-img-5.png",   # Side burner
    "us-mk-series-05.png": "美标MK系列KD结构-img-6.png",   # Pizza oven
    "us-mk-series-06.png": "美标MK系列KD结构-img-7.png",   # Corner cabinet
    "us-mk-series-07.png": "美标MK系列KD结构-img-10.png",  # Overall
    "us-mk-series-08.png": "美标MK系列KD结构-img-11.png",  # Detail
    "us-mk-series-09.png": "美标MK系列KD结构-img-12.png",  # Detail
    "us-mk-series-10.png": "美标MK系列KD结构-img-13.png",  # Detail
    "us-mk-series-11.png": "美标MK系列KD结构-img-14.png",  # Detail
    "us-mk-series-12.png": "美标MK系列KD结构-img-15.png",  # Detail
    "us-mk-series-13.png": "美标MK系列KD结构-img-16.png",  # Detail
    
    # European 8-piece
    "eu-8pcs-01.png": "欧款8件KD-img-2.png",
    "eu-8pcs-02.png": "欧款8件KD-img-3.png",
    "eu-8pcs-03.png": "欧款8件KD-img-4.png",
    "eu-8pcs-04.png": "欧款8件KD-img-5.png",
    "eu-8pcs-05.png": "欧款8件KD-img-6.png",
    "eu-8pcs-06.png": "欧款8件KD-img-7.png",
    "eu-8pcs-07.png": "欧款8件KD-img-8.png",
    "eu-8pcs-08.png": "欧款8件KD-img-9.png",
    "eu-8pcs-09.png": "欧款8件KD-img-10.png",
    
    # European Black 5-piece
    "eu-black-5pcs-01.png": "欧款黑色5件KD-img-2.png",
    "eu-black-5pcs-02.png": "欧款黑色5件KD-img-3.png",
    "eu-black-5pcs-03.png": "欧款黑色5件KD-img-4.png",
    "eu-black-5pcs-04.png": "欧款黑色5件KD-img-5.png",
    "eu-black-5pcs-05.png": "欧款黑色5件KD-img-6.png",
    
    # US 3-piece + fridge
    "us-3pcs-fridge-01.png": "美规三件套带冰箱-img-2.png",
    "us-3pcs-fridge-02.png": "美规三件套带冰箱-img-3.png",
    "us-3pcs-fridge-03.png": "美规三件套带冰箱-img-4.png",
    "us-3pcs-fridge-04.png": "美规三件套带冰箱-img-5.png",
    "us-3pcs-fridge-05.png": "美规三件套带冰箱-img-6.png",
    "us-3pcs-fridge-06.png": "美规三件套带冰箱-img-7.png",
    "us-3pcs-fridge-07.png": "美规三件套带冰箱-img-8.png",
    
    # European 3-piece + fridge
    "eu-3pcs-fridge-01.png": "欧洲三件套带冰箱-img-2.png",
    "eu-3pcs-fridge-02.png": "欧洲三件套带冰箱-img-3.png",
    "eu-3pcs-fridge-03.png": "欧洲三件套带冰箱-img-4.png",
    "eu-3pcs-fridge-04.png": "欧洲三件套带冰箱-img-5.png",
    "eu-3pcs-fridge-05.png": "欧洲三件套带冰箱-img-6.png",
    "eu-3pcs-fridge-06.png": "欧洲三件套带冰箱-img-7.png",
    "eu-3pcs-fridge-07.png": "欧洲三件套带冰箱-img-8.png",
}

copied = 0
for new_name, old_name in product_images.items():
    src = os.path.join(img_dir, old_name)
    if os.path.exists(src):
        dst = os.path.join(hot_dir, new_name)
        shutil.copy2(src, dst)
        copied += 1
        print(f"  {old_name} -> {new_name}")

print(f"\nCopied {copied} images to {hot_dir}")
