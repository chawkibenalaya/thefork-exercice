export function cleanName(name: string): string {
    return name.replace(/restaurant\s*/i, '').trim();
  }