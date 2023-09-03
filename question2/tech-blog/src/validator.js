

class Validator {
  constructor(rules) {
    this.rules = rules
  }

  validate(state) {
    let validation = this.valid()
    
    this.rules.forEach(rule => {
    
      if (!validation.field[rule.field].isInvalid) {
        const field_value = state[rule.field]

        if(!rule.validWhen(field_value)) {
          validation.field[rule.field] = { 
            isInvalid: true, 
            message: rule.message || ''
          }
          validation.isValid = false
        }
      }
    })

    return validation
  }
  
  valid() {
    const validation = {
      isValid: false,
      field: {}
    }
    
    this.rules.map(rule => (
        validation.field[rule.field] = { isInvalid: false, message: '' }
    ))

    validation.isValid = true

    return validation
  }
}

export default Validator