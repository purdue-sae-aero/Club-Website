from PIL import Image

# Open the logo
img = Image.open('PSAEA_logo-thumbnail.jpg')
img = img.convert('RGBA')

# Get pixel data
datas = img.getdata()

# Create new data with black pixels made transparent
newData = []
for item in datas:
    # If pixel is close to black, make it transparent
    if item[0] < 30 and item[1] < 30 and item[2] < 30:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

# Update image and save
img.putdata(newData)
img.save('PSAEA_logo-thumbnail.png', 'PNG')
print("Logo converted to PNG with transparent background")
