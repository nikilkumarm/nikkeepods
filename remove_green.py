from PIL import Image

def remove_green_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        # item is (R, G, B, A)
        r, g, b, a = item
        
        # Simple Green Screen Logic
        # If Green is significantly brighter than Red and Blue
        if g > 100 and g > r + 40 and g > b + 40:
            new_data.append((255, 255, 255, 0)) # Transparent
        else:
            new_data.append(item) # Keep original

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved transparent image to {output_path}")

if __name__ == "__main__":
    input_file = "/Users/nikkee/.gemini/antigravity/brain/1cb305ac-7740-492d-81c9-da707e89332e/hero_pods_green_1767962568146.png"
    output_file = "/Users/nikkee/Documents/airpods site/nikkeepods/public/hero-pods-transparent.png"
    remove_green_background(input_file, output_file)
