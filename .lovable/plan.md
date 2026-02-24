

## Make Image Container Match Image Size

Right now the flex container has hardcoded heights (`h-[28rem]`, `md:h-[40rem]`, `lg:h-[44rem]`), which forces images to be cropped or padded via `object-cover`. This is why the container doesn't match the natural image size.

### What will change

**File: `src/components/SignalCategories.tsx`**

- Remove the fixed height classes from the flex container
- Change `object-cover` to `object-contain` (or remove it) so images display at their natural aspect ratio
- Keep `rounded-lg`, gaps, and all other styling intact

The images will then define the container height themselves -- no cropping, no extra space. The row will be exactly as tall as the images naturally are.

### Technical detail

The flex container becomes:
```
<div className="flex gap-0.5">
```

And each image becomes:
```
<img className="flex-1 min-w-0 w-0 rounded-lg" />
```

Using `w-0` with `flex-1` ensures equal widths, and removing height/object-cover lets the browser size images naturally.

