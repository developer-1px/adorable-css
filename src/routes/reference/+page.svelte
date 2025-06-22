<script lang="ts">
// Navigation styles
const nav = "fixed top(0) w(fill) hbox gap(auto) p(16/40) bg(#fff/.9) backdrop(10) z(100) shadow(sm)"
const navLogo = "font(24/700) c(#333) hover:c(#667eea) transition(.3s)"
const navLink = "font(16/500) c(#666) hover:c(#333) transition(.3s) p(8/16)"

// Page styles
const container = "w(fill) min-h(screen) bg(#f8f9ff) pt(80)"
const mainContent = "w(1400) m(auto) p(40)"
const pageTitle = "font(48/1.2/700) c(#333) mb(16)"
const pageSubtitle = "font(20/1.5) c(#666) mb(48)"

// Table styles
const tableCard = "bg(#fff) r(16) shadow(md) overflow(hidden) mb(32)"
const tableHeader = "hbox gap(auto) p(24) bg(gradient(#667eea/#764ba2)) c(#fff)"
const sectionTitle = "font(24/600) c(#fff)"
const sectionIcon = "font(32)"
const tableBody = "p(0)"
const tableRow = "hbox gap(0) b(1/#e2e8f0) hover:bg(#f8f9ff) transition(.2s)"
const classCell = "w(400) p(16/24) font(14/1.5) bg(#2d3748) c(#e2e8f0) font-mono"
const outputCell = "flex-1 p(16/24) font(14/1.5) c(#4a5568)"

// Search styles
const searchContainer = "sticky top(80) bg(#f8f9ff) p(16/0) z(50) mb(32)"
const searchInput = "w(fill) p(12/16) r(8) b(2/#e2e8f0) bg(#fff) font(16) focus:b(#667eea) transition(.3s)"

// Filter styles
const filterContainer = "hbox gap(16) mb(32) wrap"
const filterButton = "p(8/16) r(6) bg(#fff) b(1/#e2e8f0) c(#666) font(14/500) hover:bg(#667eea) hover:c(#fff) transition(.3s)"
const activeFilter = "bg(#667eea) c(#fff)"

// Reference data organized by Figma concepts
const referenceData = [
  {
    category: "Auto Layout",
    icon: "📐",
    description: "Figma's Auto Layout system for flexible containers",
    items: [
      {
        class: 'hbox',
        css: 'display: flex; align-items: center;',
        description: 'Horizontal auto layout'
      },
      {
        class: 'vbox',
        css: 'display: flex; flex-direction: column;',
        description: 'Vertical auto layout'
      },
      {
        class: 'pack',
        css: 'display: flex; align-items: center; justify-content: center;',
        description: 'Center items in both directions'
      },
      {
        class: 'hbox(center)',
        css: 'display: flex; align-items: center; justify-content: center;',
        description: 'Horizontal layout with center alignment'
      },
      {
        class: 'vbox(center)',
        css: 'display: flex; flex-direction: column; align-items: center;',
        description: 'Vertical layout with center alignment'
      },
      {
        class: 'gap(16)',
        css: 'gap: 16px;',
        description: 'Space between items'
      },
      {
        class: 'gap(16/24)',
        css: 'gap: 16px 24px;',
        description: 'Row and column gap'
      }
    ]
  },
  {
    category: "Size & Position",
    icon: "📏",
    description: "Sizing and positioning like Figma's properties panel",
    items: [
      {
        class: 'w(300)',
        css: 'width: 300px;',
        description: 'Fixed width'
      },
      {
        class: 'w(fill)',
        css: 'width: 100%;',
        description: 'Fill container width'
      },
      {
        class: 'w(hug)',
        css: 'width: fit-content;',
        description: 'Hug content width'
      },
      {
        class: 'h(200)',
        css: 'height: 200px;',
        description: 'Fixed height'
      },
      {
        class: 'h(fill)',
        css: 'height: 100%;',
        description: 'Fill container height'
      },
      {
        class: '300x200',
        css: 'width: 300px; height: 200px;',
        description: 'Fixed dimensions'
      },
      {
        class: '16:9',
        css: 'aspect-ratio: 16/9;',
        description: 'Aspect ratio constraint'
      },
      {
        class: 'absolute',
        css: 'position: absolute;',
        description: 'Absolute positioning'
      },
      {
        class: 'relative',
        css: 'position: relative;',
        description: 'Relative positioning'
      },
      {
        class: 'top(10)',
        css: 'top: 10px;',
        description: 'Top offset'
      },
      {
        class: 'left(20)',
        css: 'left: 20px;',
        description: 'Left offset'
      }
    ]
  },
  {
    category: "Spacing",
    icon: "📦",
    description: "Padding and margin like Figma's spacing controls",
    items: [
      {
        class: 'p(16)',
        css: 'padding: 16px;',
        description: 'Equal padding on all sides'
      },
      {
        class: 'p(16/24)',
        css: 'padding: 16px 24px;',
        description: 'Vertical and horizontal padding'
      },
      {
        class: 'p(16/24/32)',
        css: 'padding: 16px 24px 32px;',
        description: 'Top, horizontal, bottom padding'
      },
      {
        class: 'p(16/24/32/8)',
        css: 'padding: 16px 24px 32px 8px;',
        description: 'All four sides padding'
      },
      {
        class: 'px(20)',
        css: 'padding-left: 20px; padding-right: 20px;',
        description: 'Horizontal padding'
      },
      {
        class: 'py(16)',
        css: 'padding-top: 16px; padding-bottom: 16px;',
        description: 'Vertical padding'
      },
      {
        class: 'm(16)',
        css: 'margin: 16px;',
        description: 'Equal margin on all sides'
      },
      {
        class: 'mx(auto)',
        css: 'margin-left: auto; margin-right: auto;',
        description: 'Center horizontally'
      },
      {
        class: 'mt(20)',
        css: 'margin-top: 20px;',
        description: 'Top margin'
      }
    ]
  },
  {
    category: "Fill & Stroke",
    icon: "🎨",
    description: "Colors and backgrounds like Figma's fill properties",
    items: [
      {
        class: 'bg(#667eea)',
        css: 'background: #667eea;',
        description: 'Solid background color'
      },
      {
        class: 'bg(#000/.5)',
        css: 'background: rgba(0, 0, 0, 0.5);',
        description: 'Background with opacity'
      },
      {
        class: 'c(#333)',
        css: 'color: #333;',
        description: 'Text color'
      },
      {
        class: 'c(#fff)',
        css: 'color: #fff;',
        description: 'White text'
      },
      {
        class: 'gradient(#667eea/#764ba2)',
        css: 'background: linear-gradient(45deg, #667eea, #764ba2);',
        description: 'Linear gradient'
      },
      {
        class: 'gradient(#ff0000/#00ff00/90)',
        css: 'background: linear-gradient(90deg, #ff0000, #00ff00);',
        description: 'Gradient with custom angle'
      },
      {
        class: 'b(1/#e2e8f0)',
        css: 'border: 1px solid #e2e8f0;',
        description: 'Border with color'
      },
      {
        class: 'b(2/#667eea)',
        css: 'border: 2px solid #667eea;',
        description: 'Thicker border'
      }
    ]
  },
  {
    category: "Corner Radius",
    icon: "🔘",
    description: "Border radius like Figma's corner radius",
    items: [
      {
        class: 'r(8)',
        css: 'border-radius: 8px;',
        description: 'Equal corner radius'
      },
      {
        class: 'r(50%)',
        css: 'border-radius: 50%;',
        description: 'Circle'
      },
      {
        class: 'r(8/16)',
        css: 'border-radius: 8px 16px;',
        description: 'Different horizontal/vertical radius'
      }
    ]
  },
  {
    category: "Typography",
    icon: "📝",
    description: "Text properties like Figma's text panel",
    items: [
      {
        class: 'font(16)',
        css: 'font-size: 16px;',
        description: 'Font size only'
      },
      {
        class: 'font(16/1.5)',
        css: 'font-size: 16px; line-height: 1.5;',
        description: 'Font size and line height'
      },
      {
        class: 'font(16/1.5/-1%)',
        css: 'font-size: 16px; line-height: 1.5; letter-spacing: -0.01em;',
        description: 'Size, line-height, letter spacing'
      },
      {
        class: 'font(16/1.5/-1%/600)',
        css: 'font-size: 16px; line-height: 1.5; letter-spacing: -0.01em; font-weight: 600;',
        description: 'Complete font styling'
      },
      {
        class: 'bold',
        css: 'font-weight: 700;',
        description: 'Bold text'
      },
      {
        class: 'italic',
        css: 'font-style: italic;',
        description: 'Italic text'
      },
      {
        class: 'text(center)',
        css: 'text-align: center;',
        description: 'Center text alignment'
      },
      {
        class: 'text(left)',
        css: 'text-align: left;',
        description: 'Left text alignment'
      }
    ]
  },
  {
    category: "Effects",
    icon: "✨",
    description: "Visual effects like Figma's effects panel",
    items: [
      {
        class: 'shadow(sm)',
        css: 'box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);',
        description: 'Small shadow'
      },
      {
        class: 'shadow(md)',
        css: 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
        description: 'Medium shadow'
      },
      {
        class: 'shadow(lg)',
        css: 'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
        description: 'Large shadow'
      },
      {
        class: 'blur(4)',
        css: 'filter: blur(4px);',
        description: 'Blur effect'
      },
      {
        class: 'opacity(.5)',
        css: 'opacity: 0.5;',
        description: 'Semi-transparent'
      },
      {
        class: 'backdrop(10)',
        css: 'backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);',
        description: 'Backdrop blur'
      }
    ]
  },
  {
    category: "Transform",
    icon: "🔄",
    description: "Transform properties for animations and interactions",
    items: [
      {
        class: 'scale(1.1)',
        css: 'transform: scale(1.1);',
        description: 'Scale transformation'
      },
      {
        class: 'rotate(45)',
        css: 'transform: rotate(45deg);',
        description: 'Rotation'
      },
      {
        class: 'transition(.3s)',
        css: 'transition: all 0.3s;',
        description: 'Smooth transition'
      }
    ]
  },
  {
    category: "Interactive States",
    icon: "👆",
    description: "Hover, active, and focus states for interactivity",
    items: [
      {
        class: 'hover:bg(#667eea)',
        css: '.hover\\:bg\\(\\#667eea\\):hover { background: #667eea; }',
        description: 'Hover background change'
      },
      {
        class: 'hover:scale(1.05)',
        css: '.hover\\:scale\\(1\\.05\\):hover { transform: scale(1.05); }',
        description: 'Hover scale effect'
      },
      {
        class: 'active:bg(#5a6fd8)',
        css: '.active\\:bg\\(\\#5a6fd8\\):active { background: #5a6fd8; }',
        description: 'Active state styling'
      },
      {
        class: 'focus:b(#667eea)',
        css: '.focus\\:b\\(\\#667eea\\):focus { border-color: #667eea; }',
        description: 'Focus state border'
      }
    ]
  }
];

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
</svelte:head>

<!-- Navigation -->
<nav class={nav}>
  <div class="hbox gap(32)">
    <a href="/" class={navLogo}>AdorableCSS v2</a>
    <div class="hbox gap(24)">
      <a href="/" class={navLink}>Home</a>
      <a href="/reference" class="{navLink} c(#667eea)">Reference</a>
      <a href="/playground" class={navLink}>Playground</a>
    </div>
  </div>
  <div class="hbox gap(16)">
    <a href="https://github.com/developer-1px/adorable-css" class="hbox(center) gap(8) p(8/16) c(#666) hover:c(#333) transition(.3s)">
      <span class="font(20)">⭐</span>
      <span class="font(14/500)">GitHub</span>
    </a>
  </div>
</nav>

<div class={container}>
  <div class={mainContent}>
    <!-- Page Header -->
    <div class="vbox gap(16) mb(48)">
      <h1 class={pageTitle}>CSS Reference</h1>
      <p class={pageSubtitle}>
        Complete reference of AdorableCSS v2 classes organized by Figma design concepts. 
        See the exact CSS output for each class.
      </p>
    </div>

    <!-- Search & Filter -->
    <div class={searchContainer}>
      <div class="vbox gap(16)">
        <input 
          type="text" 
          placeholder="Search classes... (e.g., hbox, w(300), bg(#fff))"
          class={searchInput}
          bind:value={searchTerm}
        />
        
        <div class={filterContainer}>
          <button 
            class="{filterButton} {activeFilterValue === 'all' ? activeFilter : ''}"
            on:click={() => filterByCategory('all')}
          >
            All Categories
          </button>
          {#each referenceData as section}
            <button 
              class="{filterButton} {activeFilterValue === section.category ? activeFilter : ''}"
              on:click={() => filterByCategory(section.category)}
            >
              {section.icon} {section.category}
            </button>
          {/each}
        </div>
      </div>
    </div>

    <!-- Reference Tables -->
    {#each filteredData as section}
      <div class={tableCard}>
        <div class={tableHeader}>
          <div class="hbox gap(16)">
            <span class={sectionIcon}>{section.icon}</span>
            <div class="vbox gap(4)">
              <h2 class={sectionTitle}>{section.category}</h2>
              <p class="font(14) c(#fff) opacity(.8)">{section.description}</p>
            </div>
          </div>
          <div class="font(14) c(#fff) opacity(.8)">
            {section.items.length} utilities
          </div>
        </div>
        
        <div class={tableBody}>
          <!-- Table Header -->
          <div class="hbox gap(0) bg(#f8f9ff) font(14/600) c(#4a5568)">
            <div class="w(400) p(12/24) b(1/#e2e8f0)">AdorableCSS Class</div>
            <div class="flex-1 p(12/24) b(1/#e2e8f0)">Generated CSS</div>
            <div class="w(250) p(12/24) b(1/#e2e8f0) text(center)">Description</div>
          </div>
          
          <!-- Table Rows -->
          {#each section.items as item}
            <div class={tableRow}>
              <div class={classCell}>
                <code class="font(13/1.4)">{item.class}</code>
              </div>
              <div class={outputCell}>
                <code class="font(12/1.4) c(#059669)">{item.css}</code>
              </div>
              <div class="w(250) p(16/24) font(12/1.4) c(#6b7280)">
                {item.description}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}

    <!-- No Results -->
    {#if filteredData.length === 0}
      <div class="vbox gap(24) pack p(80) text(center)">
        <div class="font(48)">🔍</div>
        <div class="vbox gap(8)">
          <h3 class="font(24/600) c(#4a5568)">No classes found</h3>
          <p class="font(16) c(#6b7280)">
            Try adjusting your search term or filter selection.
          </p>
        </div>
        <button 
          class="p(12/24) bg(#667eea) c(#fff) r(8) font(14/600) hover:bg(#5a6fd8) transition(.3s)"
          on:click={() => { searchTerm = ''; activeFilterValue = 'all'; }}
        >
          Clear all filters
        </button>
      </div>
    {/if}

    <!-- Quick Links -->
    <div class="vbox gap(32) mt(64) p(40) bg(gradient(#667eea/.05/#764ba2/.05)) r(16) b(1/#667eea/.2)">
      <h3 class="font(24/600) c(#333)">Quick Navigation</h3>
      <div class="hbox gap(16) wrap">
        {#each referenceData as section}
          <button 
            class="hbox gap(8) p(8/16) bg(#fff) r(6) shadow(sm) hover:shadow(md) transition(.3s)"
            on:click={() => filterByCategory(section.category)}
          >
            <span class="font(20)">{section.icon}</span>
            <span class="font(14/500) c(#4a5568)">{section.category}</span>
          </button>
        {/each}
      </div>
    </div>

    <!-- Tips Section -->
    <div class="vbox gap(24) mt(32) p(32) bg(#fff) r(16) shadow(md)">
      <h3 class="font(20/600) c(#333)">💡 Pro Tips</h3>
      <div class="vbox gap(16) font(14/1.6) c(#4a5568)">
        <div class="hbox gap(12)">
          <span class="font(16) c(#667eea)">•</span>
          <span>Combine multiple classes: <code class="p(2/4) bg(#f1f5f9) r(4) font(13)">hbox gap(16) p(24) bg(#fff) shadow(md)</code></span>
        </div>
        <div class="hbox gap(12)">
          <span class="font(16) c(#667eea)">•</span>
          <span>Use the slash syntax for shorthand: <code class="p(2/4) bg(#f1f5f9) r(4) font(13)">p(16/24)</code> = padding: 16px 24px</span>
        </div>
        <div class="hbox gap(12)">
          <span class="font(16) c(#667eea)">•</span>
          <span>Opacity in colors: <code class="p(2/4) bg(#f1f5f9) r(4) font(13)">bg(#000/.5)</code> = rgba(0,0,0,0.5)</span>
        </div>
        <div class="hbox gap(12)">
          <span class="font(16) c(#667eea)">•</span>
          <span>Interactive states: <code class="p(2/4) bg(#f1f5f9) r(4) font(13)">hover:bg(#667eea)</code> for hover effects</span>
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
</style>