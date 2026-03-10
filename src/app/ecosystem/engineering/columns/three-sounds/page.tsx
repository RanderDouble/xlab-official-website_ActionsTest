import { ListPage } from '@/components/common/ListPage';
import { THREE_SOUNDS } from '@/lib/data';

export default function ThreeSoundsPage() {
  return <ListPage title="三声万物" items={THREE_SOUNDS} itemsPerPage={5} />;
}