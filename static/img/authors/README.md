# Author Images

Place your author avatar images in this directory.

## Required Files

- `your-avatar.jpg` - Your main profile picture (used in about page and homepage)

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 200x200px minimum
- **Aspect Ratio**: Square (1:1) works best
- **File Size**: Keep under 1MB for fast loading

## Usage

After adding your image, update the following files to reference it:

1. **Author configuration files**:
   - `blog/authors.yml`
   - `learning/authors.yml` 
   - `life/authors.yml`

2. **Homepage**: `src/pages/index.tsx` (avatar section)

Example reference: `/img/authors/your-avatar.jpg`