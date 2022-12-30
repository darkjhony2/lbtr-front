import { useEffect, useState } from "react"
import { Input } from "reactstrap"

export const CustomDropdown = ({ id, values, value, setValue }) => {

  const [rowValues, setRowValues] = useState([]);
  
  useEffect(() => {
    if (values.length > 0) {
      fillValues()
    }
  }, [values])


  function fillValues() {
    let rows = []
    values.forEach(v => {
      rows.push(
        <option key={v.code} value={v.code}>{id === "settlementConceptCode" || id === "documentType"? v.code + ' - ' + v.description : v.name}</option>
      )
    })
    setRowValues(rows)
  }

  function handleValue(event) {
    setValue(event)
  }

  return (
    <Input name={id} id={id} value={value} onChange={handleValue} className="textField" type="select">
      <option value={-1}>Seleccione</option>
      {rowValues}
    </Input>
  )
}
