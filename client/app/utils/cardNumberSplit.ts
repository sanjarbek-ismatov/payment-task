import { ChangeEvent, Dispatch, SetStateAction } from "react";

function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
  return function (
    setCardNumber: Dispatch<SetStateAction<string>>,
    setType?: Dispatch<SetStateAction<string>>
  ) {
    const { value } = event.target;
    const selectionStart = event.target.selectionStart ?? 0;
    const withoutSpaces = value.replace(/\s/g, "");
    const replaced = withoutSpaces.replace(/(\d{4})/g, "$1 ").trim();
    const withNumbers = replaced.match(/(\d{4}\s){3}\d{4}/);
    const withEmail = value.match(/[\d\w]+\@\w+\.\w+/gi);
    let type = withNumbers ? "card" : withEmail ? "email" : "name";
    setType && setType(type);
    if (!withNumbers || replaced.length < 20) setCardNumber(replaced);
    const selectionPosition =
      selectionStart + (replaced.length - withoutSpaces.length);
    event.target.setSelectionRange(selectionPosition, selectionPosition);
  };
}

export default handleInputChange;
