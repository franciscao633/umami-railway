import { Dropdown, Item, Button, Flexbox } from 'react-basics';
import { listTimeZones } from 'timezone-support';
import useTimezone from 'hooks/useTimezone';
import useMessages from 'hooks/useMessages';
import { getTimezone } from 'lib/date';

export default function TimezoneSetting() {
  const { formatMessage, labels } = useMessages();
  const [timezone, saveTimezone] = useTimezone();
  const options = listTimeZones();

  const handleReset = () => saveTimezone(getTimezone());

  return (
    <Flexbox gap={10}>
      <Dropdown
        items={options}
        value={timezone}
        onChange={saveTimezone}
        style={{ flex: 1 }}
        menuProps={{ style: { height: 300 } }}
      >
        {item => <Item key={item}>{item}</Item>}
      </Dropdown>
      <Button onClick={handleReset}>{formatMessage(labels.reset)}</Button>
    </Flexbox>
  );
}
