/**
 * 工厂模式：分为简单工厂和抽象工厂
 * 
 * 
 * 
 */


// 抽象工厂
class MobilePhoneFactory {

  // 创建操作系统
  creatOs(){
     throw new Error('我会报错，只是定义操作系统的规则')
  }

  // 创建硬件系统
  creatHardWare(){
    throw new Error('我会报错，只是定义硬件系统的规则')
  }
}


// 具体工厂类

class FakerMobilePhoneFactory extends MobilePhoneFactory {

  creatOs(){
    // 提供安卓操作系统
    return new AndroidOs()
  }
  
  creatHardWare(){
    // 提供高通硬件
    return new GaoTongHardWare()
  }
}

// 抽象产品类
class Os{
  
  createOs(){
     throw new Error('我会报错， 需要重写抽象产品类')
  }
}

class HardWare{
  
  createHardWare(){
     throw new Error('我会报错， 需要重写抽象产品类')
  }
}




// 具体产品类

class AndroidOs extends Os {
  
  createOs(){
    console.log('我会用安卓的方式操作系统')
  }
}

class GaoTongHardWare extends HardWare {
  createHardWare(){
    console.log('我会用高通的方式操作系统')
  }
}

const Myphone  = new FakerMobilePhoneFactory()
const myOs = Myphone.creatOs()
myOs.createOs()

console.log('object', Myphone)

