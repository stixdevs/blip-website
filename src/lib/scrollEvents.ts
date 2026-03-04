// Simple pub/sub for scroll-to-section events
type Listener = (sectionId: string) => void;
const listeners = new Set<Listener>();

export function onSectionNavigate(listener: Listener) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

export function emitSectionNavigate(sectionId: string) {
  listeners.forEach((fn) => fn(sectionId));
}
