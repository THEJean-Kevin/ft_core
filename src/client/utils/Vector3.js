class Vector3{
    constructor(x=0,y=0=z=0){
        this.x = x;
        this.y = y;
        this.z = 0;
    }
    clone(){
        return new Vector3(this.x,this.y,this.z)
    }

    add(arg1, arg2, arg3){
        if(arg1 && arg2 && arg3){
            this.x += arg1;
            this.y += arg2;
            this.z += arg3;
        }else if(typeof arg1 === "number"){
            this.x += arg1;
            this.y += arg1;
            this.z += arg1;
        }else if (arg1 instanceof Vector3){
            this.x += arg1.x;
            this.y += arg1.y;
            this.z += arg1.z;
        }
        return this
    }
    substract(arg1, arg2, arg3){
        if(arg1 && arg2 && arg3){
            this.x -= arg1;
            this.y -= arg2;
            this.z -= arg3;
        }else if(typeof arg1 === "number"){
            this.x -= arg1;
            this.y -= arg1;
            this.z -= arg1;
        }else if (arg1 instanceof Vector3){
            this.x -= arg1.x;
            this.y -= arg1.y;
            this.z -= arg1.z;
        }
        return this
    }

    multiply(arg1, arg2, arg3){
        if(arg1 && arg2 && arg3){
            this.x *= arg1;
            this.y *= arg2;
            this.z *= arg3;
        }else if(typeof arg1 === "number"){
            this.x *= arg1;
            this.y *= arg1;
            this.z *= arg1;
        }else if (arg1 instanceof Vector3){
            this.x *= arg1.x;
            this.y *= arg1.y;
            this.z *= arg1.z;
        }
        return this
    }

    divide(arg1, arg2, arg3){
        if(arg1 && arg2 && arg3){
            this.x /= arg1;
            this.y /= arg2;
            this.z /= arg3;
        }else if(typeof arg1 === "number"){
            this.x /= arg1;
            this.y /= arg1;
            this.z /= arg1;
        }else if (arg1 instanceof Vector3){
            this.x /= arg1.x;
            this.y /= arg1.y;
            this.z /= arg1.z;
        }
        return this
    }

    equals(arg1, arg2, arg3){
        if(arg1 && arg2 && arg3){
            return this.x === arg1 && this.y === arg2 && this.z === arg3
        }else if(typeof arg1 === "number"){
            return this.x === arg1 && this.y === arg1 && this.z === arg1
        }else if (arg1 instanceof Vector3){
            return this.x === arg1.x && this.y === arg1.y && this.z === arg1.z
        }
    }
    
    angleTo(v){
        var racine = Math.sqrt( this.length() * v.length() );
    
        if(racine === 0){console.error('Vector3: angleTo() can\'t handle zero length vectors.')}
        var theta = this.dot( v ) / denominator;
        return Math.acos( _Math.clamp( theta, - 1, 1 ) );
    }

    lenght(){
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }

    dot(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    max(v){
        if(v){
            this.x = Math.max( this.x, v.x );
            this.y = Math.max( this.y, v.y );
            this.z = Math.max( this.z, v.z );

		    return this;
        }else{
            return Math.max(this.x,this.y,this.z)
        }
    }
    min(v){
        if(v){
            this.x = Math.min( this.x, v.x );
            this.y = Math.min( this.y, v.y );
            this.z = Math.min( this.z, v.z );

		    return this;
        }else{
            return Math.min(this.x,this.y,this.z)
        }
    }
    negative(){
        this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;

		return this;
    }

    toArray(){
        return[this.x,this.y,this.z]
    }
    distanceTo(v) {
		return Math.sqrt( this.distanceToSquared( v ) );
    }
    
    distanceToSquared(v){
        var dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
		return dx * dx + dy * dy + dz * dz;
    }
}