<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm  ) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-three {
      background-color: #fff0e0;
      color: #92400e;
    }

    &-react {
      background-color: #ddf4fc;
      color: #0369a1;
    }

    &-websockets {
      background-color: #e0f2fe;
      color: #075985;
    }

    &-redis {
      background-color: #ffe4e1;
      color: #be123c;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #fefce8;
      color: #854d0e;
    }

    &-node {
      background-color: #dcfce7;
      color: #166534;
    }

    &-next {
      background-color: #f1f5f9;
      color: #1e293b;
    }

    &-kubernetes {
      background-color: #dbeafe;
      color: #1d4ed8;
    }

    &-postgresql {
      background-color: #e0f2fe;
      color: #0c4a6e;
    }

    &-ogl {
      background-color: #dbeafe;
      color: #1e40af;
    }

    &-glsl {
      background-color: #fef9c3;
      color: #713f12;
    }

    &-typescript {
      background-color: #dbeafe;
      color: #1d4ed8;
    }

    &-dotnet {
      background-color: #ede9fe;
      color: #5b21b6;
    }

    &-azure {
      background-color: #dbeafe;
      color: #1e40af;
    }

    &-stripe {
      background-color: #ede9fe;
      color: #4c1d95;
    }

    &-kafka {
      background-color: #ffedd5;
      color: #9a3412;
    }
  }
}
</style>
