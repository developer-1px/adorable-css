<div class="w(300) bg(#fff) br(#ccc)">

  <div class="p(20) bb(#ccc)">
    <div class="bold">Auto Layout</div>

    <button on:click={() => hbox()}>→</button>
    <button on:click={() => vbox()}>↓</button>

    <div>gap</div>
    <input type="number" value="0"/>

    <div>padding()</div>
    <input type="number" value="0"/>

    <div class="p(10) pack">
      <div class="b(#ccc) w(200) h(200) relative">
        <div class="bg(#4f80ff) layer(top+left) m(10) p(10)">box</div>
      </div>
    </div>

    <select>
      <option value="packed">packed</option>
      <option value="space-beetween">space beetween</option>
    </select>
  </div>

  <div class="p(20) bb(#ccc)">
    <div class="bold">Resize</div>
    <div>width</div>
    <div>height</div>
  </div>

  <div class="p(20) bb(#ccc)">
    <div class="bold">Box</div>
    <div>Radius</div>
    <div>Fill</div>
    <div>Border</div>
    <div>Shadow</div>
  </div>

  <div class="p(20) bb(#ccc)">
    <div class="bold">Text</div>

    <div>Roboto</div>

    <div class="hbox gap(10)">
      <div>Regular</div>
      <div>12</div>
    </div>

    <div class="hbox gap(10)">
      <div>line-height</div>
      <div>letter-spacing</div>
    </div>

    <div class="hbox gap(10)">
      <div>left</div>
      <div>center</div>
      <div>right</div>
      <div>justify</div>
    </div>
  </div>
</div>