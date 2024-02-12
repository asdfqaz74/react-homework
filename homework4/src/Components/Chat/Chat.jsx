import useGetStorage from './useCheckedMessage';

export default function Chat() {
  const id = useGetStorage();
  console.log(id);
  return <div className="bg-primary"></div>;
}
