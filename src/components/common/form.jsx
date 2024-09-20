import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

function CommonForm({ formControls, formData, setFormData,onSubmit,buttonText }) {
  function renderInputsByComponentsBy(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || ''

    switch (getControlItem.ComponentType) {
      case "input":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(e)=>{setFormData({...formData,[getControlItem.name]: e.target.value})}}
          />
        );

        break;

      case "select":
        element = (
          <Select value={value} onValueChange={(value)=>setFormData({...formData,[getControlItem.name]: value})}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((option) => (
                    <SelectItem key={option.id} value={option.name}>
                      {option.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );

        break;

      case "textarea":
        element = (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            value={value}
            onChange={(e)=>{setFormData({...formData,[getControlItem.name]: e.target.value})}}
          ></Textarea>
        );

        break;

      default:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(e)=>{setFormData({...formData,[getControlItem.name]: e.target.value})}}
          />
        );
    }
    return element;
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        {formControls.map((controlItem) => (
          <div className="grid gap-1.5 w-full" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputsByComponentsBy(controlItem)}
          </div>
        ))}
      </div>
      <Button type='submit' className="mt-2 w-full">{buttonText || 'Submit'}</Button>
    </form>
  );
}
export default CommonForm;
