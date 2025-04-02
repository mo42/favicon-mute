all: icon_16.png icon_32.png icon_64.png icon_128.png
	zip favicon-mute.zip manifest.json content.js icon_16.png icon_32.png icon_48.png icon_64.png icon_128.png

icon_16.png:
	magick -density 500 icon.svg -resize 16x16 -quality 100 icon_16.png
                                     
icon_32.png:                         
	magick -density 500 icon.svg -resize 32x32 -quality 100 icon_32.png
                                     
icon_48.png:                         
	magick -density 500 icon.svg -resize 48x48 -quality 100 icon_48.png
                                     
icon_64.png:                         
	magick -density 500 icon.svg -resize 64x64 -quality 100 icon_64.png
                                     
icon_128.png:                        
	magick -density 500 icon.svg -resize 128x128 -quality 100 icon_128.png

clean:
	rm favicon-mute.zip *.png
