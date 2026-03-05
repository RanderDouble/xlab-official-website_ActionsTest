import {ListPage } from '@/components/common/ListPage';
import { NOAH_ARK } from '@/lib/data';

export default function NoahArkPage() {
  return <ListPage title="诺亚方舟" items={NOAH_ARK} />;
}