class ActorModel {
    constructor(fname, lname, birthday, imageurl, IMDBlink, age) {
      this.fname = fname;
      this.lname = lname;
      this.imageurl = Image;
      this.imageurl = imageurl;
      this.birthday = this.getBirthday.bind(this);
    }
    // getBirthday() {
    //   const currentYear = new Date().getFullYear(); // 2021
    //   //console.log(currentYear);
    //   const yearsOnRoad = currentYear - this.year; 
    //   return parseInt(this.birthday / (yearsOnRoad || 1)); 
    // }
  }



export default ActorModel;