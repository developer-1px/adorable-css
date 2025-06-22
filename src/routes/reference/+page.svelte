<script lang="ts">
import { generateSimpleCSS } from '../../../packages/v2/unocss/simple-css-generator.ts';

// Better categorized reference data with clear grouping
const referenceData = [
  {
    category: "Layout",
    description: "Auto Layout, alignment, and flex containers",
    groups: [
      {
        title: "Flex Direction",
        items: [
          { class: 'hbox', description: 'Horizontal flex container' },
          { class: 'hbox(center)', description: 'Horizontal with center alignment' },
          { class: 'hbox(left)', description: 'Horizontal with left alignment' },
          { class: 'hbox(right)', description: 'Horizontal with right alignment' }
        ]
      },
      {
        title: "Vertical Layout",
        items: [
          { class: 'vbox', description: 'Vertical flex container' },
          { class: 'vbox(center)', description: 'Vertical with center alignment' },
          { class: 'vbox(top)', description: 'Vertical with top alignment' },
          { class: 'vbox(bottom)', description: 'Vertical with bottom alignment' }
        ]
      },
      {
        title: "Alignment & Wrapping",
        items: [
          { class: 'pack', description: 'Center items in both directions' },
          { class: 'wrap', description: 'Enable flex wrap' }
        ]
      },
      {
        title: "Gap & Spacing",
        items: [
          { class: 'gap(16)', description: 'Spacing between items' },
          { class: 'gap(16/24)', description: 'Row/column gap for wrap layouts' }
        ]
      }
    ]
  },
  {
    category: "Sizing",
    description: "Width, height, and aspect ratios",
    groups: [
      {
        title: "Width (w)",
        items: [
          { class: 'w(300)', description: 'Fixed width 300px' },
          { class: 'w(fill)', description: 'Fill available width' },
          { class: 'w(hug)', description: 'Fit content width' },
          { class: 'w(200..)', description: 'Minimum width 200px' },
          { class: 'w(..400)', description: 'Maximum width 400px' },
          { class: 'w(200..400)', description: 'Width between 200-400px' }
        ]
      },
      {
        title: "Height (h)",
        items: [
          { class: 'h(200)', description: 'Fixed height 200px' },
          { class: 'h(fill)', description: 'Fill available height' },
          { class: 'h(hug)', description: 'Fit content height' }
        ]
      },
      {
        title: "Combined & Ratios",
        items: [
          { class: '300x200', description: 'Fixed width and height' },
          { class: '16:9', description: 'Aspect ratio 16:9' },
          { class: '4:3', description: 'Aspect ratio 4:3' },
          { class: '1:1', description: 'Square aspect ratio' }
        ]
      }
    ]
  },
  {
    category: "Spacing",
    description: "Padding and margin controls",
    groups: [
      {
        title: "Padding (p)",
        items: [
          { class: 'p(16)', description: 'Padding 16px all sides' },
          { class: 'p(16/24)', description: 'Padding 16px vertical, 24px horizontal' },
          { class: 'p(16/24/32/8)', description: 'Padding top/right/bottom/left' },
          { class: 'px(20)', description: 'Horizontal padding 20px' },
          { class: 'py(16)', description: 'Vertical padding 16px' }
        ]
      },
      {
        title: "Padding Sides",
        items: [
          { class: 'pt(12)', description: 'Top padding 12px' },
          { class: 'pr(12)', description: 'Right padding 12px' },
          { class: 'pb(12)', description: 'Bottom padding 12px' },
          { class: 'pl(12)', description: 'Left padding 12px' }
        ]
      },
      {
        title: "Margin (m)",
        items: [
          { class: 'm(16)', description: 'Margin 16px all sides' },
          { class: 'mx(20)', description: 'Horizontal margin 20px' },
          { class: 'my(16)', description: 'Vertical margin 16px' },
          { class: 'mx(auto)', description: 'Center horizontally' },
          { class: 'mt(20)', description: 'Top margin 20px' },
          { class: 'mb(20)', description: 'Bottom margin 20px' }
        ]
      }
    ]
  },
  {
    category: "Position",
    description: "Positioning and layering",
    groups: [
      {
        title: "Position Types",
        items: [
          { class: 'relative', description: 'Relative positioning' },
          { class: 'absolute', description: 'Absolute positioning' },
          { class: 'fixed', description: 'Fixed positioning' },
          { class: 'sticky', description: 'Sticky positioning' }
        ]
      },
      {
        title: "Position Offsets",
        items: [
          { class: 'top(10)', description: 'Top offset 10px' },
          { class: 'left(20)', description: 'Left offset 20px' },
          { class: 'right(30)', description: 'Right offset 30px' },
          { class: 'bottom(40)', description: 'Bottom offset 40px' }
        ]
      },
      {
        title: "Z-Index & Layers",
        items: [
          { class: 'z(1)', description: 'Z-index 1' },
          { class: 'z(10)', description: 'Z-index 10' },
          { class: 'z(100)', description: 'Z-index 100' },
          { class: 'layer', description: 'Full cover layer' },
          { class: 'layer(top)', description: 'Top-aligned layer' }
        ]
      }
    ]
  },
  {
    category: "Colors",
    description: "Background, text, and border colors",
    groups: [
      {
        title: "Background (bg)",
        items: [
          { class: 'bg(#667eea)', description: 'Background color' },
          { class: 'bg(#000/.5)', description: 'Background with 50% opacity' },
          { class: 'bg(linear/#667eea/#764ba2)', description: 'Linear gradient background' },
          { class: 'bg(radial/#667eea/#764ba2)', description: 'Radial gradient background' }
        ]
      },
      {
        title: "Text Color (c)",
        items: [
          { class: 'c(#333)', description: 'Text color dark gray' },
          { class: 'c(#fff)', description: 'Text color white' },
          { class: 'c(#000/.7)', description: 'Text color with 70% opacity' }
        ]
      },
      {
        title: "Borders (b)",
        items: [
          { class: 'b(#e5e7eb)', description: 'Border color gray' },
          { class: 'b(2/#667eea)', description: 'Border 2px blue' },
          { class: 'bt(1/#e5e7eb)', description: 'Top border 1px gray' },
          { class: 'br(1/#e5e7eb)', description: 'Right border 1px gray' },
          { class: 'bb(1/#e5e7eb)', description: 'Bottom border 1px gray' },
          { class: 'bl(1/#e5e7eb)', description: 'Left border 1px gray' }
        ]
      }
    ]
  },
  {
    category: "Typography",
    description: "Font size, weight, and text styling",
    groups: [
      {
        title: "Font Function",
        items: [
          { class: 'font(16)', description: 'Font size 16px' },
          { class: 'font(16/24)', description: 'Font size 16px, line height 24px' },
          { class: 'font(24/1.2)', description: 'Font size 24px, line height 1.2' },
          { class: 'font(24) 600', description: 'Font size 24px, weight 600' },
          { class: 'font(16/24/-1%)', description: 'Size, line height, letter spacing' },
          { class: 'font(16/24/-1%/500)', description: 'Size, line height, spacing, weight' }
        ]
      },
      {
        title: "Font Weights",
        items: [
          { class: '300', description: 'Font weight 300 (Light)' },
          { class: '400', description: 'Font weight 400 (Regular)' },
          { class: '500', description: 'Font weight 500 (Medium)' },
          { class: '600', description: 'Font weight 600 (Semi Bold)' },
          { class: '700', description: 'Font weight 700 (Bold)' },
          { class: '800', description: 'Font weight 800 (Extra Bold)' }
        ]
      },
      {
        title: "Text Properties",
        items: [
          { class: 'text(left)', description: 'Text align left' },
          { class: 'text(center)', description: 'Text align center' },
          { class: 'text(right)', description: 'Text align right' },
          { class: 'uppercase', description: 'Transform to uppercase' },
          { class: 'lowercase', description: 'Transform to lowercase' },
          { class: 'underline', description: 'Text decoration underline' },
          { class: 'italic', description: 'Font style italic' }
        ]
      }
    ]
  },
  {
    category: "Borders & Radius",
    description: "Border radius and corner styling",
    groups: [
      {
        title: "Border Radius (r)",
        items: [
          { class: 'r(4)', description: 'Border radius 4px' },
          { class: 'r(8)', description: 'Border radius 8px' },
          { class: 'r(12)', description: 'Border radius 12px' },
          { class: 'r(16)', description: 'Border radius 16px' },
          { class: 'r(50%)', description: 'Circular border radius' },
          { class: 'r()', description: 'Maximum border radius (pill)' },
          { class: 'r(8/16)', description: 'Vertical 8px, horizontal 16px radius' },
          { class: 'r(8/16/8/16)', description: 'Individual corner radius' }
        ]
      }
    ]
  },
  {
    category: "Effects",
    description: "Shadows, opacity, and visual effects",
    groups: [
      {
        title: "Shadows",
        items: [
          { class: 'shadow(sm)', description: 'Small drop shadow' },
          { class: 'shadow(md)', description: 'Medium drop shadow' },
          { class: 'shadow(lg)', description: 'Large drop shadow' },
          { class: 'shadow(xl)', description: 'Extra large drop shadow' }
        ]
      },
      {
        title: "Opacity & Blur",
        items: [
          { class: 'opacity(.5)', description: 'Element opacity 50%' },
          { class: 'opacity(.8)', description: 'Element opacity 80%' },
          { class: 'backdrop(10)', description: 'Backdrop blur 10px' },
          { class: 'blur(4)', description: 'Element blur 4px' }
        ]
      },
      {
        title: "Interactions",
        items: [
          { class: 'transition(.3s)', description: 'Transition duration 300ms' },
          { class: 'hover:scale(1.05)', description: 'Scale on hover' },
          { class: 'hover:opacity(.8)', description: 'Opacity change on hover' }
        ]
      }
    ]
  },
  {
    category: "Utility",
    description: "Display, overflow, and common utilities",
    groups: [
      {
        title: "Display",
        items: [
          { class: 'block', description: 'Display block' },
          { class: 'inline', description: 'Display inline' },
          { class: 'inline-block', description: 'Display inline-block' },
          { class: 'none', description: 'Display none (hide)' },
          { class: 'hidden', description: 'Visibility hidden' }
        ]
      },
      {
        title: "Overflow & Cursor",
        items: [
          { class: 'clip', description: 'Overflow hidden' },
          { class: 'scroll', description: 'Overflow scroll' },
          { class: 'nowrap', description: 'Text no wrap' },
          { class: 'truncate', description: 'Text ellipsis' },
          { class: 'pointer', description: 'Cursor pointer' },
          { class: 'not-allowed', description: 'Cursor not allowed' }
        ]
      }
    ]
  }
];

// Add CSS generation to each item
referenceData.forEach(section => {
  section.groups.forEach(group => {
    group.items.forEach(item => {
      item.css = generateSimpleCSS(item.class) || 'Not implemented yet';
    });
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
      const hasMatchingItem = section.groups.some(group =>
        group.items.some(item => 
          item.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      return hasMatchingItem;
    }
    
    return true;
  }).map(section => ({
    ...section,
    groups: section.groups.map(group => ({
      ...group,
      items: group.items.filter(item =>
        !searchTerm || 
        item.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(group => group.items.length > 0)
  }));
}

$: {
  searchTerm;
  updateFilteredData();
}
</script>

<svelte:head>
  <title>Reference - AdorableCSS v2</title>
  <meta name="description" content="Complete reference documentation for AdorableCSS v2 classes organized by design concepts." />
</svelte:head>

<!-- Navigation -->
<nav class="fixed top(0) w(fill) hbox gap(auto) p(12/32) bg(#fff/.95) backdrop(20) z(100) b(bottom/1/#e5e7eb)">
  <div class="hbox gap(32)">
    <a href="/" class="font(18) 700 c(#111827) hover:c(#4f46e5) transition(.2s)">AdorableCSS</a>
    <div class="hbox gap(24)">
      <a href="/" class="font(14) 500 c(#6b7280) hover:c(#111827) transition(.2s)">Home</a>
      <a href="/reference" class="font(14) 500 c(#4f46e5)">Reference</a>
    </div>
  </div>
  <div class="hbox gap(12)">
    <a href="https://github.com/developer-1px/adorable-css" class="hbox gap(6) p(6/12) c(#6b7280) hover:c(#111827) transition(.2s)">
      <span class="font(14)">⭐</span>
      <span class="font(13) 500">GitHub</span>
    </a>
  </div>
</nav>

<div class="w(fill) min-h(screen) bg(#fafafa) pt(64)">
  <div class="w(1600) mx(auto) p(24)">
    <!-- Page Header -->
    <div class="vbox gap(8) pb(24)">
      <h1 class="font(32/40) 700 c(#111827)">Reference</h1>
      <p class="font(16/24) c(#6b7280) w(560)">
        Complete reference of AdorableCSS v2 classes organized by design concepts.
      </p>
    </div>

    <!-- Search & Filter -->
    <div class="sticky top(64) bg(#fafafa) py(16) z(50) vbox gap(16) pb(24)">
      <input 
        type="text" 
        placeholder="Search classes... (e.g., hbox, w(300), bg(#fff))"
        class="w(fill) p(10/14) r(6) b(1/#d1d5db) bg(#fff) font(14) focus:b(#4f46e5) transition(.2s)"
        bind:value={searchTerm}
      />
      
      <div class="hbox gap(8) wrap">
        <button 
          class="p(6/12) r(4) font(13) 500 transition(.2s) {activeFilterValue === 'all' ? 'bg(#4f46e5) c(#fff)' : 'bg(#fff) c(#6b7280) hover:c(#4f46e5) b(1/#d1d5db)'}"
          on:click={() => filterByCategory('all')}
        >
          All
        </button>
        {#each referenceData as section}
          <button 
            class="p(6/12) r(4) font(13) 500 transition(.2s) {activeFilterValue === section.category ? 'bg(#4f46e5) c(#fff)' : 'bg(#fff) c(#6b7280) hover:c(#4f46e5) b(1/#d1d5db)'}"
            on:click={() => filterByCategory(section.category)}
          >
            {section.category}
          </button>
        {/each}
      </div>
    </div>

    <!-- Reference Grid Layout -->
    <div class="vbox gap(24)">
      {#each filteredData as section}
        <div class="bg(#fff) r(8) b(1/#e5e7eb) clip">
          <!-- Section Header -->
          <div class="hbox gap(auto) p(16/20) b(bottom/1/#e5e7eb)">
            <div class="vbox gap(2)">
              <h2 class="font(18) 600 c(#111827)">{section.category}</h2>
              <p class="font(13) c(#6b7280)">{section.description}</p>
            </div>
            <div class="font(12) 500 c(#9ca3af)">
              {section.groups.reduce((total, group) => total + group.items.length, 0)} classes
            </div>
          </div>
          
          <!-- Groups -->
          {#each section.groups as group}
            {#if group.items.length > 0}
              <div class="p(8)">
                <!-- Group Title -->
                <div class="p(8/12) font(11) 600 c(#6b7280) uppercase">
                  {group.title}
                </div>
                
                <!-- Items Grid -->
                <div class="hbox wrap gap(0)">
                  {#each group.items as item}
                    <div class="w(25%) p(6)">
                      <div class="vbox gap(6) p(12) r(6) b(1/#f3f4f6) hover:b(#4f46e5) hover:shadow(sm) transition(.2s)">
                        <!-- Class name -->
                        <code class="font(12) 600 c(#4f46e5)">{item.class}</code>
                        
                        <!-- Generated CSS -->
                        <div class="font(9/13) c(#6b7280) font-mono">
                          {item.css}
                        </div>
                        
                        <!-- Description -->
                        <div class="font(10/14) c(#9ca3af)">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            {/if}
          {/each}
        </div>
      {/each}
    </div>

    <!-- No Results -->
    {#if filteredData.length === 0}
      <div class="vbox gap(16) pack p(48) text(center) bg(#fff) r(8) b(1/#e5e7eb)">
        <div class="vbox gap(6)">
          <h3 class="font(16) 600 c(#374151)">No classes found</h3>
          <p class="font(13) c(#6b7280)">
            Try adjusting your search term or filter selection.
          </p>
        </div>
        <button 
          class="p(8/16) bg(#4f46e5) c(#fff) r(4) font(13) 500 hover:bg(#4338ca) transition(.2s)"
          on:click={() => { searchTerm = ''; activeFilterValue = 'all'; }}
        >
          Clear filters
        </button>
      </div>
    {/if}

    <!-- Usage Tips -->
    <div class="vbox gap(16) p(24) bg(#fff) r(8) b(1/#e5e7eb)">
      <h3 class="font(16) 600 c(#111827)">Usage Tips</h3>
      <div class="hbox wrap gap(24)">
        <div class="vbox gap(6) w(fill)">
          <div class="font(13) 500 c(#374151)">Combine classes</div>
          <code class="p(8/10) r(4) font(12) c(#6b7280) b(1/#e5e7eb)">hbox gap(16) p(24) bg(#fff) shadow(md)</code>
        </div>
        <div class="vbox gap(6) w(fill)">
          <div class="font(13) 500 c(#374151)">Slash syntax</div>
          <code class="p(8/10) r(4) font(12) c(#6b7280) b(1/#e5e7eb)">p(16/24) = padding: 16px 24px</code>
        </div>
        <div class="vbox gap(6) w(fill)">
          <div class="font(13) 500 c(#374151)">Font patterns</div>
          <code class="p(8/10) r(4) font(12) c(#6b7280) b(1/#e5e7eb)">font(24) 600 = size + weight</code>
        </div>
        <div class="vbox gap(6) w(fill)">
          <div class="font(13) 500 c(#374151)">Opacity syntax</div>
          <code class="p(8/10) r(4) font(12) c(#6b7280) b(1/#e5e7eb)">bg(#000/.5) = rgba(0,0,0,0.5)</code>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  code, .font-mono {
    font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  }
  
  .wrap {
    flex-wrap: wrap;
  }
  
  input:focus {
    outline: none;
  }
</style>