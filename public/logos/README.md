# Real Estate Brokerage Logos

This directory contains the transparent PNG logos for the scrolling marquee on the homepage.

## Required Logos

You need to download and add these 9 logos as transparent PNGs:

1. **compass.png** - Compass Real Estate
2. **keller-williams.png** - Keller Williams
3. **remax.png** - RE/MAX
4. **redfin.png** - Redfin
5. **coldwell-banker.png** - Coldwell Banker
6. **sothebys.png** - Sotheby's International Realty
7. **exp-realty.png** - eXp Realty
8. **century21.png** - Century 21
9. **keyes-company.png** - The Keyes Company

## Where to Download

### Option 1: Official Brand Pages (Recommended)
Visit each company's official press kit or brand guidelines page:

- **Compass**: https://www.compass.com/about/press/
- **Keller Williams**: https://www.kw.com/
- **RE/MAX**: https://www.remax.com/press-center
- **Redfin**: https://www.redfin.com/news/
- **Coldwell Banker**: https://www.coldwellbanker.com/
- **Sotheby's**: https://www.sothebysrealty.com/eng/about
- **eXp Realty**: https://exprealty.com/
- **Century 21**: https://www.century21.com/
- **The Keyes Company**: https://www.keyes.com/

### Option 2: Logo Search Services
Try these services for high-quality transparent logos:
- Brandfetch: https://brandfetch.com/
- Seeklogo: https://seeklogo.com/
- Worldvectorlogo: https://worldvectorlogo.com/

### Option 3: Google Search
Search for: "[Company Name] logo transparent PNG"

## Logo Specifications

- **Format**: PNG with transparent background
- **Recommended Size**: 400-600px width (height will auto-adjust)
- **Color**: Full color (the marquee applies grayscale effect, which removes on hover)
- **Naming**: Use exact names listed above (lowercase, hyphens for spaces)

## Installation

1. Download each logo as a transparent PNG
2. Rename the files to match the names above
3. Place all 9 PNG files in this directory (`public/logos/`)
4. The marquee will automatically display them

## Troubleshooting

If a logo doesn't appear:
- Check the filename matches exactly (case-sensitive)
- Verify the image is in PNG format
- Ensure the image has a transparent background
- Clear your browser cache and refresh

If the logo looks cut off or too large:
- Edit the logo specifications in `src/components/BrokerageMarquee.tsx`
- Adjust the `width` and `height` values in the style prop

## Legal Note

Make sure you have the right to use these logos. Most companies allow use of their logos for attribution purposes, but always check their brand guidelines.
