<script lang="ts">
import { generateSimpleCSS } from '../../../packages/v2/unocss/simple-css-generator.ts';

// Reference data organized by Figma concepts with real CSS output
const referenceData = [
  {
    category: "Auto Layout",
    description: "Figma's Auto Layout system for flexible containers",
    items: [
      { class: 'hbox', description: 'Horizontal auto layout (default: center alignment)' },
      { class: 'vbox', description: 'Vertical auto layout (default: top alignment)' },
      { class: 'pack', description: 'Center items in both directions' },
      { class: 'wrap', description: 'Enable wrap for auto layout' },
      { class: 'hbox(center)', description: 'Horizontal with center+middle alignment' },
      { class: 'hbox(left+top)', description: 'Horizontal with explicit left+top alignment' },
      { class: 'hbox(right+bottom)', description: 'Horizontal with right+bottom alignment' },
      { class: 'vbox(center)', description: 'Vertical with center alignment' },
      { class: 'wrap(middle)', description: 'Wrap with middle alignment' },
      { class: 'gap(16)', description: 'Item spacing between flex items' },
      { class: 'gap(16/24)', description: 'Row gap 16px, column gap 24px (for wrap)' }
    ]
  },
  {
    category: "Size & Dimensions",
    description: "Sizing and dimensions like Figma's size properties",
    items: [
      { class: '300x200', description: 'Fixed size both dimensions' },
      { class: 'w(300)', description: 'Fixed width' },
      { class: 'h(200)', description: 'Fixed height' },
      { class: 'w(hug)', description: 'Hug contents width (like Figma)' },
      { class: 'w(fill)', description: 'Fill container width (like Figma)' },
      { class: 'h(hug)', description: 'Hug contents height' },
      { class: 'h(fill)', description: 'Fill container height' },
      { class: 'w(200..)', description: 'Min-width constraint' },
      { class: 'w(..400)', description: 'Max-width constraint' },
      { class: 'w(200..400)', description: 'Min and max width constraints' },
      { class: 'w(fill/300..600)', description: 'Fill with min/max constraints' },
      { class: '16:9', description: 'Aspect ratio 16:9' },
      { class: '4:3', description: 'Aspect ratio 4:3' },
      { class: '1:1', description: 'Square aspect ratio' }
    ]
  },
  {
    category: "Position & Constraints",
    description: "Positioning and constraints like Figma's constraint system", 
    items: [
      { class: 'relative', description: 'Relative positioning' },
      { class: 'absolute', description: 'Absolute positioning' },
      { class: 'fixed', description: 'Fixed positioning' },
      { class: 'sticky', description: 'Sticky positioning' },
      { class: '(0,0)', description: 'Absolute position left:0, top:0' },
      { class: '(..0,..0)', description: 'Absolute position right:0, bottom:0' },
      { class: '(10..10,0)', description: 'Absolute with left+right, top constraints' },
      { class: '(center,center)', description: 'Absolute center positioning' },
      { class: 'layer', description: 'Absolute layer covering full parent' },
      { class: 'layer(top)', description: 'Absolute layer aligned to top' },
      { class: 'layer(top+left)', description: 'Absolute layer aligned to top-left' },
      { class: 'top(10)', description: 'Top offset for positioned elements' },
      { class: 'left(20)', description: 'Left offset for positioned elements' },
      { class: 'right(30)', description: 'Right offset for positioned elements' },
      { class: 'bottom(40)', description: 'Bottom offset for positioned elements' },
      { class: 'z(1)', description: 'Z-index stacking order' },
      { class: 'z(10)', description: 'Higher z-index' },
      { class: 'z(top)', description: 'Highest z-index' }
    ]
  },
  {
    category: "Spacing",
    description: "Padding and margin like Figma's spacing controls",
    items: [
      { class: 'p(16)', description: 'Equal padding on all sides' },
      { class: 'p(16/24)', description: 'Vertical 16px, horizontal 24px padding' },
      { class: 'p(16/24/32)', description: 'Top, horizontal, bottom padding' },
      { class: 'p(16/24/32/8)', description: 'Top, right, bottom, left padding' },
      { class: 'px(20)', description: 'Horizontal padding only' },
      { class: 'py(16)', description: 'Vertical padding only' },
      { class: 'pt(12)', description: 'Top padding only' },
      { class: 'pr(12)', description: 'Right padding only' },
      { class: 'pb(12)', description: 'Bottom padding only' },
      { class: 'pl(12)', description: 'Left padding only' },
      { class: 'm(16)', description: 'Equal margin on all sides' },
      { class: 'mx(20)', description: 'Horizontal margin' },
      { class: 'my(16)', description: 'Vertical margin' },
      { class: 'mx(auto)', description: 'Center horizontally' },
      { class: 'mt(20)', description: 'Top margin only' },
      { class: 'mr(20)', description: 'Right margin only' },
      { class: 'mb(20)', description: 'Bottom margin only' },
      { class: 'ml(20)', description: 'Left margin only' }
    ]
  },
  {
    category: "Fill & Stroke",
    description: "Colors and backgrounds like Figma's fill properties",
    items: [
      { class: 'bg(#667eea)', description: 'Solid background color' },
      { class: 'bg(#000/.5)', description: 'Background with opacity' },
      { class: 'bg(linear-gradient(0deg/#000/#fff))', description: 'Linear gradient background' },
      { class: 'bg(radial/#000/#fff)', description: 'Radial gradient background' },
      { class: 'bg(url(image.jpg))', description: 'Background image from URL' },
      { class: 'bg(./image.jpg)', description: 'Background image from relative path' },
      { class: 'c(#333)', description: 'Text color' },
      { class: 'c(#fff)', description: 'White text color' },
      { class: 'c(#000/.5)', description: 'Text color with opacity' },
      { class: 'c(linear-gradient(45deg/#ff0000/#00ff00))', description: 'Gradient text color' },
      { class: 'caret(#667eea)', description: 'Input caret color' },
      { class: 'b(#e2e8f0)', description: 'Border with default 1px width' },
      { class: 'b(2/#667eea)', description: 'Border with custom width and color' },
      { class: 'b(1/#000/dashed)', description: 'Dashed border with width, color, style' },
      { class: 'bt(2/#667eea)', description: 'Top border only' },
      { class: 'br(2/#667eea)', description: 'Right border only' },
      { class: 'bb(2/#667eea)', description: 'Bottom border only' },
      { class: 'bl(2/#667eea)', description: 'Left border only' },
      { class: 'o(2/#667eea)', description: 'Outline with width and color' }
    ]
  },
  {
    category: "Corner Radius",
    description: "Border radius like Figma's corner radius",
    items: [
      { class: 'r(8)', description: 'Equal corner radius on all corners' },
      { class: 'r(8/16)', description: 'Top-bottom 8px, left-right 16px radius' },
      { class: 'r(8/16/8/16)', description: 'Individual corner radius (TL/TR/BR/BL)' },
      { class: 'r(50%)', description: 'Perfect circle or oval' },
      { class: 'r()', description: 'Maximum border radius (pill shape)' }
    ]
  },
  {
    category: "Typography",
    description: "Text properties like Figma's text panel",
    items: [
      { class: '14', description: 'Font size shorthand' },
      { class: '16/24', description: 'Font size and line height shorthand' },
      { class: 'font(16)', description: 'Font size only' },
      { class: 'font(16/24)', description: 'Font size and line height' },
      { class: 'font(24) 600', description: 'Font size 24px with separate weight 600' },
      { class: 'font(16/24/-2%)', description: 'Size, line height, letter spacing' },
      { class: 'font(16/24/-2%/500)', description: 'Size, line height, letter spacing, weight' },
      { class: 'font(16/24/-/700)', description: 'Size, line height, skip letter-spacing, weight' },
      { class: 'font(Inter/16/24/-2%/500)', description: 'Complete font with family' },
      { class: 'font(28/1.1/800)', description: 'Common pattern: size/line-height/weight' },
      { class: 'font(24/1.2/600)', description: 'Title with proper weight' },
      { class: 'font(18/1.6/400)', description: 'Body text with regular weight' },
      { class: '100', description: 'Numeric font weight: 100 (Thin)' },
      { class: '200', description: 'Numeric font weight: 200 (Extra Light)' },
      { class: '300', description: 'Numeric font weight: 300 (Light)' },
      { class: '400', description: 'Numeric font weight: 400 (Regular)' },
      { class: '500', description: 'Numeric font weight: 500 (Medium)' },
      { class: '600', description: 'Numeric font weight: 600 (Semi Bold)' },
      { class: '700', description: 'Numeric font weight: 700 (Bold)' },
      { class: '800', description: 'Numeric font weight: 800 (Extra Bold)' },
      { class: '900', description: 'Numeric font weight: 900 (Black)' },
      { class: 'bold', description: 'Named font weight: Bold (700)' },
      { class: 'medium', description: 'Named font weight: Medium (500)' },
      { class: 'light', description: 'Named font weight: Light (300)' },
      { class: 'italic', description: 'Italic text style' },
      { class: 'underline', description: 'Underlined text' },
      { class: 'strike', description: 'Strikethrough text' },
      { class: 'uppercase', description: 'Uppercase text' },
      { class: 'lowercase', description: 'Lowercase text' },
      { class: 'capitalize', description: 'Capitalize text' },
      { class: 'text(left)', description: 'Left text alignment' },
      { class: 'text(center)', description: 'Center text alignment' },
      { class: 'text(right)', description: 'Right text alignment' },
      { class: 'text(justify)', description: 'Justify text alignment' },
      { class: 'text(top)', description: 'Vertical alignment top (in flexbox)' },
      { class: 'text(middle)', description: 'Vertical alignment middle (in flexbox)' },
      { class: 'text(bottom)', description: 'Vertical alignment bottom (in flexbox)' },
      { class: 'nowrap', description: 'Prevent text wrapping' },
      { class: 'truncate', description: 'Single line text with ellipsis' },
      { class: 'max-lines(3)', description: 'Multi-line text clamp with ellipsis' },
      { class: 'break(word)', description: 'Break long words' },
      { class: 'break(all)', description: 'Break all characters' }
    ]
  },
  {
    category: "Effects",
    description: "Visual effects like Figma's effects panel",
    items: [
      { class: 'shadow(sm)', description: 'Small drop shadow' },
      { class: 'shadow(md)', description: 'Medium drop shadow' },
      { class: 'shadow(lg)', description: 'Large drop shadow' },
      { class: 'shadow(xl)', description: 'Extra large drop shadow' },
      { class: 'shadow(0/4/16/#000.1)', description: 'Custom shadow: x/y/blur/color' },
      { class: 'blur(4)', description: 'Element blur effect' },
      { class: 'blur(layer/4)', description: 'Layer blur effect' },
      { class: 'blur(bg/4)', description: 'Background blur effect' },
      { class: 'backdrop(10)', description: 'Backdrop blur filter' },
      { class: 'opacity(.5)', description: 'Element opacity (50%)' },
      { class: 'opacity(0)', description: 'Hidden but keep space' },
      { class: 'brightness(1.2)', description: 'Brightness filter' },
      { class: 'contrast(1.5)', description: 'Contrast filter' },
      { class: 'grayscale(1)', description: 'Grayscale filter' },
      { class: 'hue-rotate(90deg)', description: 'Hue rotation filter' },
      { class: 'invert(1)', description: 'Invert colors filter' },
      { class: 'saturate(2)', description: 'Saturation filter' },
      { class: 'sepia(.5)', description: 'Sepia filter' },
      { class: 'drop-shadow(0/4/8/rgba(0,0,0,0.1))', description: 'Drop shadow filter' }
    ]
  }
];

// Add CSS generation to each item
referenceData.forEach(section => {
  section.items.forEach(item => {
    item.css = generateSimpleCSS(item.class) || 'Not implemented yet';
  });
});

let searchTerm = '';
let activeFilterValue = 'all';
let filteredData = referenceData;

// Filter functions
function filterByCategory(category) {
  activeFilterValue = category;
  updateFilteredData();
}

function updateFilteredData() {
  filteredData = referenceData.filter(section => {
    if (activeFilterValue !== 'all' && section.category !== activeFilterValue) return false;
    
    if (searchTerm) {
      const hasMatchingItem = section.items.some(item => 
        item.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return hasMatchingItem;
    }
    
    return true;
  }).map(section => ({
    ...section,
    items: section.items.filter(item =>
      !searchTerm || 
      item.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));
}

$: {
  searchTerm;
  updateFilteredData();
}
</script>

<svelte:head>
  <title>Reference - AdorableCSS v2</title>
  <meta name="description" content="Complete reference documentation for AdorableCSS v2 classes organized by Figma design concepts." />
</svelte:head>

<!-- Navigation -->
<nav class="fixed top(0) w(fill) hbox gap(auto) p(16/40) bg(#fff/.95) backdrop(20) z(100) b(bottom/1/#e5e7eb)">
  <div class="hbox gap(40)">
    <a href="/" class="font(20) 700 c(#111827) hover:c(#4f46e5) transition(.2s)">AdorableCSS</a>
    <div class="hbox gap(32)">
      <a href="/" class="font(15) 500 c(#6b7280) hover:c(#111827) transition(.2s)">Home</a>
      <a href="/reference" class="font(15) 500 c(#4f46e5)">Reference</a>
    </div>
  </div>
  <div class="hbox gap(16)">
    <a href="https://github.com/developer-1px/adorable-css" class="hbox gap(8) p(8/16) c(#6b7280) hover:c(#111827) transition(.2s)">
      <span class="font(16)">⭐</span>
      <span class="font(14) 500">GitHub</span>
    </a>
  </div>
</nav>

<div class="w(fill) min-h(screen) bg(#fafafa) pt(72)">
  <div class="w(1400) mx(auto) p(40)">
    <!-- Page Header -->
    <div class="vbox gap(12) pb(40)">
      <h1 class="font(36/44) 700 c(#111827)">Reference</h1>
      <p class="font(18/28) c(#6b7280) w(640)">
        Complete reference of AdorableCSS v2 classes organized by Figma design concepts. 
        Each class shows its exact CSS output for easy understanding.
      </p>
    </div>

    <!-- Search & Filter -->
    <div class="sticky top(72) bg(#fafafa) py(20) z(50) vbox gap(20) pb(32)">
      <input 
        type="text" 
        placeholder="Search classes... (e.g., hbox, w(300), bg(#fff))"
        class="w(fill) p(12/16) r(8) b(1/#d1d5db) bg(#fff) font(15) focus:b(#4f46e5) focus:ring(0) transition(.2s)"
        bind:value={searchTerm}
      />
      
      <div class="hbox gap(12) wrap">
        <button 
          class="p(8/16) r(6) font(14) 500 transition(.2s) {activeFilterValue === 'all' ? 'bg(#4f46e5) c(#fff)' : 'bg(#fff) c(#6b7280) hover:bg(#f3f4f6) b(1/#d1d5db)'}"
          on:click={() => filterByCategory('all')}
        >
          All Categories
        </button>
        {#each referenceData as section}
          <button 
            class="p(8/16) r(6) font(14) 500 transition(.2s) {activeFilterValue === section.category ? 'bg(#4f46e5) c(#fff)' : 'bg(#fff) c(#6b7280) hover:bg(#f3f4f6) b(1/#d1d5db)'}"
            on:click={() => filterByCategory(section.category)}
          >
            {section.category}
          </button>
        {/each}
      </div>
    </div>

    <!-- Reference Tables -->
    <div class="vbox gap(32)">
      {#each filteredData as section}
        <div class="bg(#fff) r(12) b(1/#e5e7eb) clip">
          <div class="hbox gap(auto) p(24) bg(#f9fafb) b(bottom/1/#e5e7eb)">
            <div class="vbox gap(4)">
              <h2 class="font(20) 600 c(#111827)">{section.category}</h2>
              <p class="font(14) c(#6b7280)">{section.description}</p>
            </div>
            <div class="font(13) 500 c(#9ca3af)">
              {section.items.length} classes
            </div>
          </div>
          
          <!-- Table Header -->
          <div class="hbox bg(#f9fafb) font(13) 600 c(#374151) b(bottom/1/#e5e7eb)">
            <div class="w(320) p(12/20)">Class</div>
            <div class="w(fill) p(12/20)">Generated CSS</div>
            <div class="w(280) p(12/20)">Description</div>
          </div>
          
          <!-- Table Rows -->
          {#each section.items as item}
            <div class="hbox b(bottom/1/#f3f4f6) hover:bg(#f9fafb) transition(.1s)">
              <div class="w(320) p(16/20) vbox gap(4)">
                <code class="font(13) 600 c(#7c3aed) bg(#faf5ff) p(4/8) r(4) w(fit)">{item.class}</code>
              </div>
              <div class="w(fill) p(16/20)">
                <code class="font(12/18) c(#059669) bg(#f0fdf4) p(8/12) r(4) block">{item.css}</code>
              </div>
              <div class="w(280) p(16/20) font(13/20) c(#6b7280)">
                {item.description}
              </div>
            </div>
          {/each}
        </div>
      {/each}
    </div>

    <!-- No Results -->
    {#if filteredData.length === 0}
      <div class="vbox gap(20) pack p(60) text(center) bg(#fff) r(12) b(1/#e5e7eb)">
        <div class="vbox gap(8)">
          <h3 class="font(18) 600 c(#374151)">No classes found</h3>
          <p class="font(14) c(#6b7280)">
            Try adjusting your search term or filter selection.
          </p>
        </div>
        <button 
          class="p(10/20) bg(#4f46e5) c(#fff) r(6) font(14) 500 hover:bg(#4338ca) transition(.2s)"
          on:click={() => { searchTerm = ''; activeFilterValue = 'all'; }}
        >
          Clear filters
        </button>
      </div>
    {/if}

    <!-- Pro Tips -->
    <div class="vbox gap(20) p(32) bg(#fff) r(12) b(1/#e5e7eb)">
      <h3 class="font(18) 600 c(#111827)">Usage Tips</h3>
      <div class="vbox gap(16) font(14/24) c(#374151)">
        <div class="hbox gap(12)">
          <span class="w(4) h(4) r(50%) bg(#4f46e5) mt(10)"></span>
          <span>Combine multiple classes: <code class="p(2/6) bg(#f3f4f6) r(4) font(13)">hbox gap(16) p(24) bg(#fff) shadow(md)</code></span>
        </div>
        <div class="hbox gap(12)">
          <span class="w(4) h(4) r(50%) bg(#4f46e5) mt(10)"></span>
          <span>Use slash syntax for multiple values: <code class="p(2/6) bg(#f3f4f6) r(4) font(13)">p(16/24)</code> = padding: 16px 24px</span>
        </div>
        <div class="hbox gap(12)">
          <span class="w(4) h(4) r(50%) bg(#4f46e5) mt(10)"></span>
          <span>Font weight in function: <code class="p(2/6) bg(#f3f4f6) r(4) font(13)">font(28/1.1/800)</code> = size/line-height/weight</span>
        </div>
        <div class="hbox gap(12)">
          <span class="w(4) h(4) r(50%) bg(#4f46e5) mt(10)"></span>
          <span>Separate font weights: <code class="p(2/6) bg(#f3f4f6) r(4) font(13)">font(24) 600</code> = font-size + font-weight</span>
        </div>
        <div class="hbox gap(12)">
          <span class="w(4) h(4) r(50%) bg(#4f46e5) mt(10)"></span>
          <span>Opacity in colors: <code class="p(2/6) bg(#f3f4f6) r(4) font(13)">bg(#000/.5)</code> = rgba(0,0,0,0.5)</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  code {
    font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  }
  
  .wrap {
    flex-wrap: wrap;
  }
  
  input:focus {
    outline: none;
  }
</style>