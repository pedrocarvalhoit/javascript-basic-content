export default class User{
    #name
    #lastName
    #email
    #birthday
    #role
    #active
    constructor(name,lastName, email, birthday, role, active = true){
        this.#name = name;
        this.#lastName = lastName;
        this.#email = email;
        this.#birthday = birthday;
        this.#role = role || 'Student';
        this.#active = active;
    }

    set name(newName) {
        if (newName === '') {
          throw new Error('Invalid format')
        }
        let [name, ...lastName] = newName.split(" ")
        lastName = lastName.join(' ')
        this.#name = name
        this.#lastName = lastName
      }

      get name() {
        return this.#name
      }
     
      get lastName() {
        return this.#lastName
      }

      get email(){
        return this.#email
      }

      get active() {
        return this.#active
      }

    showInfos(){
        return `${this.#name}, and email is: ${this.#email}. Student active is ${this.#active}`
    }


}

