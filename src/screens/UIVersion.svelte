<script lang="ts">
import {version} from "../../package.json"
export let phase = "prod"
</script>

<div class="version fixed z(9999) layer(bottom+right) p(10/20) font(10) c(#999)" aria-hidden="true">{phase !== "prod" ? `[${phase}]` : ''} {version}</div>