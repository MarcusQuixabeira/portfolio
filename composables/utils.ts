export function getItemInSequence(index: number, sequence: string[] ): string {
  const maxIndex: number = sequence.length - 1;
  if (index > maxIndex) {
    index = index % maxIndex
    if (index > 0) {
      index -= 1;
    }
  }
  return sequence[index];
}