<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import Button from "./Button.vue";
import ArrowRightLong from "./icons/ArrowRightLong.vue";
import ButtonRound from "./ButtonRound.vue";

const emit = defineEmits<{ (e: "close"): void }>();

const name = ref("");
const email = ref("");
const message = ref("");
const submitted = ref(false);
const submitting = ref(false);
const visible = ref(false);

const TRANSITION_DURATION = 500;

onMounted(async () => {
  document.body.style.overflow = "hidden";
  await nextTick();
  // slight rAF delay so the CSS transition fires after mount
  requestAnimationFrame(() => {
    visible.value = true;
  });
});

const close = () => {
  visible.value = false;
  setTimeout(() => {
    document.body.style.overflow = "";
    emit("close");
  }, TRANSITION_DURATION);
};

onUnmounted(() => {
  document.body.style.overflow = "";
});

const handleSubmit = () => {
  if (!name.value || !email.value || !message.value) return;
  submitting.value = true;

  const mailtoUrl = `mailto:manushad.official@gmail.com?subject=New Project Inquiry from ${encodeURIComponent(name.value)}&body=${encodeURIComponent(`Name: ${name.value}\nEmail: ${email.value}\n\nMessage:\n${message.value}`)}`;

  window.location.href = mailtoUrl;
  submitted.value = true;
  submitting.value = false;
};
</script>

<template>
  <Teleport to="body">
    <!-- Blend overlay — same as ProjectBackground blend -->
    <div
      class="contact-overlay-blend"
      :class="{ 'contact-overlay-blend-visible': visible, 'contact-overlay-blend-active': true }"
    ></div>

    <!-- Panel that slides up — same motion as project pages -->
    <div
      class="contact-overlay-panel"
      :class="{ 'contact-overlay-panel-visible': visible }"
      role="dialog"
      aria-modal="true"
      aria-label="Start a new project"
    >
      <div class="contact-overlay-scroll">
        <!-- Back button -->
        <div class="contact-overlay-header">
          <ButtonRound variant="border" @click="close" aria-label="Close">
            <ArrowRightLong class="contact-overlay-back-icon" />
          </ButtonRound>
        </div>

        <!-- Two-column layout -->
        <div class="contact-overlay-body">

          <!-- Form side -->
          <div class="contact-overlay-form-side">
            <div v-if="!submitted">
              <p class="contact-overlay-banner">New Project</p>
              <h1 class="contact-overlay-title">Let's build<br />something<br />great.</h1>
              <p class="contact-overlay-subtitle">Tell me about your project and I'll get back to you.</p>

              <form class="contact-overlay-form" @submit.prevent="handleSubmit">
                <div class="contact-overlay-field">
                  <label class="contact-overlay-label" for="cm-name">Your Name</label>
                  <input id="cm-name" class="contact-overlay-input" type="text" placeholder="John Doe" v-model="name" required autocomplete="name" />
                </div>
                <div class="contact-overlay-field">
                  <label class="contact-overlay-label" for="cm-email">Email Address</label>
                  <input id="cm-email" class="contact-overlay-input" type="email" placeholder="john@example.com" v-model="email" required autocomplete="email" />
                </div>
                <div class="contact-overlay-field">
                  <label class="contact-overlay-label" for="cm-message">Project Details</label>
                  <textarea id="cm-message" class="contact-overlay-input contact-overlay-textarea" placeholder="Describe your project, goals, and timeline…" v-model="message" rows="5" required />
                </div>
                <Button type="submit" variant="accent" size="lg" :disabled="submitting" class="contact-overlay-submit">
                  {{ submitting ? "Opening mail…" : "Send Message" }}
                </Button>
              </form>
            </div>

            <div v-else class="contact-overlay-success">
              <p class="contact-overlay-banner">Message sent</p>
              <h1 class="contact-overlay-title">Thanks for<br />reaching out!</h1>
              <p class="contact-overlay-subtitle">Your email client should have opened. I'll get back to you soon.</p>
              <Button variant="accent" size="lg" @click="close" class="contact-overlay-submit">Close</Button>
            </div>
          </div>

          <!-- Animated hologram figure -->
          <div class="contact-overlay-figure-side" aria-hidden="true">
            <div class="contact-overlay-figure">
              <div class="figure-ring figure-ring-1"></div>
              <div class="figure-ring figure-ring-2"></div>
              <div class="figure-ring figure-ring-3"></div>

              <svg class="figure-person" viewBox="0 0 160 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- head -->
                <circle cx="80" cy="44" r="32" stroke="currentColor" stroke-width="1.5"/>
                <!-- neck -->
                <rect x="72" y="74" width="16" height="14" rx="4" stroke="currentColor" stroke-width="1.5"/>
                <!-- torso -->
                <path d="M30 88 Q15 100 13 130 L13 218 Q13 230 25 232 L135 232 Q147 230 147 218 L147 130 Q145 100 130 88 Z" stroke="currentColor" stroke-width="1.5"/>
                <!-- collar -->
                <path d="M64 88 L80 110 L96 88" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
                <!-- center spine detail -->
                <line x1="80" y1="110" x2="80" y2="200" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/>
                <!-- left arm -->
                <path d="M14 132 L2 200 Q0 210 8 212 L22 214" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <!-- right arm -->
                <path d="M146 132 L158 200 Q160 210 152 212 L138 214" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <!-- hands -->
                <circle cx="14" cy="217" r="6" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="146" cy="217" r="6" stroke="currentColor" stroke-width="1.5"/>
                <!-- left leg -->
                <path d="M52 232 L47 318 Q45 328 55 330 L68 331" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <!-- right leg -->
                <path d="M108 232 L113 318 Q115 328 105 330 L92 331" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <!-- left foot -->
                <path d="M52 330 L32 334 L30 344 L68 344 L64 334 Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <!-- right foot -->
                <path d="M108 330 L128 334 L130 344 L92 344 L96 334 Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <!-- chest panel -->
                <rect x="60" y="140" width="40" height="28" rx="4" stroke="currentColor" stroke-width="1" opacity="0.7"/>
                <circle cx="73" cy="154" r="5" stroke="currentColor" stroke-width="1" opacity="0.7"/>
                <line x1="83" y1="150" x2="95" y2="150" stroke="currentColor" stroke-width="1" opacity="0.6"/>
                <line x1="83" y1="155" x2="95" y2="155" stroke="currentColor" stroke-width="1" opacity="0.6"/>
                <line x1="83" y1="160" x2="90" y2="160" stroke="currentColor" stroke-width="1" opacity="0.6"/>
                <!-- scan line -->
                <rect class="figure-scan" x="5" y="0" width="150" height="3" rx="1" fill="currentColor" opacity="0.35"/>
              </svg>

              <span class="figure-dot figure-dot-1"></span>
              <span class="figure-dot figure-dot-2"></span>
              <span class="figure-dot figure-dot-3"></span>
              <span class="figure-dot figure-dot-4"></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
/* ─── Blend ─────────────────────────────────────────────── */
.contact-overlay-blend {
  position: fixed;
  inset: 0;
  background-color: rgb(5, 10, 24);
  z-index: calc(var(--z-index-layout-project) - 1);
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: opacity var(--transition-route-duration);

  &-active { visibility: visible; }
  &-visible { opacity: 0.75; }
}

/* ─── Panel ─────────────────────────────────────────────── */
.contact-overlay-panel {
  position: fixed;
  top: calc(var(--radius-xxl) * -1);
  left: 0;
  width: 100%;
  height: calc(100% + var(--radius-xxl));
  background: linear-gradient(145deg, #0b1626 0%, #0f1f3d 60%, #091422 100%);
  border-radius: var(--radius-xxl) var(--radius-xxl) 0 0;
  z-index: var(--z-index-layout-project);
  transform: translate3d(0, 100%, 0);
  transition: transform var(--transition-route-duration) var(--transition-route-ease);
  overflow: hidden;

  &-visible { transform: translate3d(0, 0, 0); }
}

/* ─── Scroll container ───────────────────────────────────── */
.contact-overlay-scroll {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-top: var(--radius-xxl);
}

/* ─── Header ─────────────────────────────────────────────── */
.contact-overlay-header {
  padding: var(--space-sm) var(--space-outer);
  display: flex;
  align-items: center;
}

.contact-overlay-back-icon {
  width: 100%;
  transform: rotate(180deg);
}

/* ─── Two-column body ─────────────────────────────────────── */
.contact-overlay-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  padding: var(--space-lg) var(--space-outer) var(--space-xxl);

  @include mixins.mq("lg") {
    flex-direction: row;
    align-items: center;
    gap: 0;
    padding: var(--space-xl) 0 var(--space-xxl);
    min-height: calc(85 * var(--lvh, 1vh));
  }
}

/* ─── Form side ──────────────────────────────────────────── */
.contact-overlay-form-side {
  @include mixins.mq("lg") {
    width: 50%;
    padding-left: var(--space-outer);
    padding-right: var(--space-xxl);
  }
}

.contact-overlay-banner {
  font-size: var(--font-size-xs);
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #38bdf8;
  margin-bottom: var(--space-xs);
}

.contact-overlay-title {
  font-size: var(--font-size-title-md);
  font-weight: 900;
  color: #f0f6ff;
  line-height: var(--line-height-title);
  margin-bottom: var(--space-sm);

  @include mixins.mq("md") { font-size: var(--font-size-title-lg); }
}

.contact-overlay-subtitle {
  font-size: var(--font-size-md);
  color: rgba(180, 200, 240, 0.7);
  margin-bottom: var(--space-md);
}

.contact-overlay-success {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.contact-overlay-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.contact-overlay-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact-overlay-label {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: rgba(180, 200, 240, 0.8);
  letter-spacing: 0.02em;
}

.contact-overlay-input {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1.5px solid rgba(56, 189, 248, 0.25);
  border-radius: var(--radius-md);
  padding: 14px 18px;
  font-size: var(--font-size-md);
  color: #e8f0ff;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  box-sizing: border-box;

  &::placeholder { color: rgba(148, 180, 220, 0.4); }
  &:focus {
    border-color: rgba(56, 189, 248, 0.7);
    background-color: rgba(255, 255, 255, 0.08);
  }
}

.contact-overlay-textarea {
  resize: vertical;
  min-height: 140px;
}

.contact-overlay-submit { margin-top: var(--space-xs); }

/* ─── Figure side ────────────────────────────────────────── */
.contact-overlay-figure-side {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 320px;

  @include mixins.mq("lg") {
    width: 50%;
    min-height: unset;
    align-self: stretch;
  }
}

.contact-overlay-figure {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: figure-float 4s ease-in-out infinite;
}

@keyframes figure-float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-18px); }
}

/* ─── SVG person ─────────────────────────────────────────── */
.figure-person {
  width: 200px;
  height: auto;
  color: #38bdf8;
  filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.5)) drop-shadow(0 0 24px rgba(56, 189, 248, 0.2));
  position: relative;
  z-index: 2;

  @include mixins.mq("md") { width: 240px; }
  @include mixins.mq("lg") { width: 280px; }
}

/* ─── Scan line ──────────────────────────────────────────── */
.figure-scan {
  animation: scan-move 3s linear infinite;
}

@keyframes scan-move {
  0%   { transform: translateY(0);     opacity: 0; }
  10%  { opacity: 0.5; }
  90%  { opacity: 0.5; }
  100% { transform: translateY(360px); opacity: 0; }
}

/* ─── Glow rings ─────────────────────────────────────────── */
.figure-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(56, 189, 248, 0.2);
  animation: ring-pulse 3s ease-out infinite;

  &-1 { width: 260px; height: 260px; animation-delay: 0s; }
  &-2 { width: 340px; height: 340px; animation-delay: 0.8s;  border-color: rgba(56, 189, 248, 0.12); }
  &-3 { width: 420px; height: 420px; animation-delay: 1.6s; border-color: rgba(56, 189, 248, 0.06); }

  @include mixins.mq("lg") {
    &-1 { width: 320px; height: 320px; }
    &-2 { width: 420px; height: 420px; }
    &-3 { width: 520px; height: 520px; }
  }
}

@keyframes ring-pulse {
  0%   { transform: scale(0.9); opacity: 0; }
  30%  { opacity: 1; }
  100% { transform: scale(1.15); opacity: 0; }
}

/* ─── Floating dots ──────────────────────────────────────── */
.figure-dot {
  position: absolute;
  border-radius: 50%;
  background: #38bdf8;
  box-shadow: 0 0 8px rgba(56, 189, 248, 0.8);

  &-1 { width: 5px; height: 5px; top: 10%; left: 15%;  animation: dot-orbit 6s linear infinite; }
  &-2 { width: 4px; height: 4px; top: 75%; right: 18%; animation: dot-orbit 8s linear infinite reverse; }
  &-3 { width: 3px; height: 3px; top: 40%; right: 10%; animation: dot-orbit 5s linear infinite; animation-delay: -2s; }
  &-4 { width: 4px; height: 4px; bottom: 20%; left: 20%; animation: dot-orbit 7s linear infinite reverse; animation-delay: -3s; }
}

@keyframes dot-orbit {
  0%   { transform: translateY(0)     translateX(0);   opacity: 1; }
  25%  { transform: translateY(-12px) translateX(8px); }
  50%  { transform: translateY(-6px)  translateX(16px); opacity: 0.4; }
  75%  { transform: translateY(8px)   translateX(4px); }
  100% { transform: translateY(0)     translateX(0);   opacity: 1; }
}
</style>
