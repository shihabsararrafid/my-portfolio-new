const { useState } = require("react");

const useOpen = () => {
  const [open, setOpen] = useState(false);

  return [open, setOpen];
};
export default useOpen;
