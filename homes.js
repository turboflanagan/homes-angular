

function House(nicName, imgSrc, width, address, city, state, zip, status, price, Zestimate, description, estMortgage) {
	this.nicName = nicName;
	this.imgSrc = imgSrc;
	this.width = width;
	this.address = address;
	this.city = city;
	this.state = state;
	this.zip = zip;
	this.status = status;
	this.price = price;
	this.Zestimate = Zestimate;
	this.description = description;
	this.estMortgage = estMortgage;


}

var houses = [];
houses.push(new House("The Villa", "http://photos3.zillowstatic.com/p_h/IShf3c5r7s3xw60000000000.jpg", "300", "4747 Northside Dr", "Atlanta", "GA", "30327", "For Sale", "2,999,000",  "4,031,664", "A good deal!! (25% off!)", "11,179/mo"));
houses.push(new House("The Pool House", "http://photos2.zillowstatic.com/p_h/IS1n6j1pnfqv2b1000000000.jpg", "300", "1101 Garmon Dr NW", "Atlanta", "GA", "30327", "For Sale", "2,399,000", "2,684,66", "Average Deal", "8,943/mo"));
houses.push(new House("The Awesome", "http://ak.t1.tiles.virtualearth.net/tiles/cmd/ObliqueHybrid?a=03200231131-48125-20-101&g=4510", "200", "914 Davis Dr", "Atlanta", "GA", "30327", "NOT for Sale", "---", "2,134,055", "---", "---"));
houses.push(new House("Versailles", "http://photos3.zillowstatic.com/p_h/ISx35uo0fixyhb0000000000.jpg", "200", "5115 Northside Dr", "Atlanta", "GA", "30327", "For Sale", "8,000,000", "12,360,014", "A crazy deal!! (30% off!)", "29,821/mo"));

