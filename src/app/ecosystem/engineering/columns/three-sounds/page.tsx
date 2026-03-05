import { ListPage } from '@/components/common/ListPage';
import { THREE_SOUNDS } from '@/lib/data';

export default function ThreeSoundsPage() {
  return (
    <ListPage
      title="三生万物"
      items={THREE_SOUNDS}
      backHref="/ecosystem/engineering"
    />
  );
}
