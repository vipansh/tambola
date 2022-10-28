type IButtonProps = {
  xl?: boolean;
  children: string;
  type: 'primary' | 'secondary';
};

const Button = (props: IButtonProps) => {
  const allClass = (() => {
    if (props.type === 'primary') {
      return 'bg-blue-500 hover:bg-blue-700';
    }
    if (props.type === 'secondary') {
      return 'bg-red-500 hover:bg-red-700';
    }
    return '';
  })();

  return (
    <div className={` text-white font-bold py-2 px-4 rounded ${allClass}`}>
      {props.children}
    </div>
  );
};

export { Button };
