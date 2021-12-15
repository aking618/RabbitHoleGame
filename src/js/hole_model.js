class HoleModel {
    constructor(location, isRabbit, isDug) {
        this.location = location;
        this.isRabbit = isRabbit;
        this.isDug = isDug;
        this.imagePath = isRabbit ? 'images/rabbit.png' : isDug ? 'images/miss.png' : '';
    }


    getLocation() {
        return this.location;
    }

    setLocation(location) {
        this.location = location;
    }

    getIsRabbit() {
        return this.isRabbit;
    }

    setIsRabbit(isRabbit) {
        this.isRabbit = isRabbit;
    }

    getIsDug() {
        return this.isDug;
    }

    setIsDug(isDug) {
        this.isDug = isDug;
    }

    getImagePath() {
        return this.imagePath;
    }

    updateImagePath() {
        this.imagePath = this.isRabbit ? 'images/rabbit.png' : this.isDug ? 'images/miss.png' : '';
    }
}

export default HoleModel;