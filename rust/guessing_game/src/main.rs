// io（输入/输出）库  标准库(std)
use std::io;
use std::cmp::Ordering;
use rand::Rng;

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1, 101);

    println!("The secret number is: {}", secret_number);

    // loop 关键字创建了一个无限循环。
    loop {
        println!("Please input your guess.");

    // 创建一个变量，变量默认是不可变的
    // 在变量名前使用 mut 来使一个变量可变
    // ::new 那一行的 :: 语法表明 new 是 String 类型的一个 关联函数（associated function）。关联函数是针对类型实现的，在这个例子中是 String，而不是 String 的某个特定实例。一些语言中把它称为 静态方法（static method）。

        let mut guess = String::new();

        // stdin 函数返回一个 std::io::Stdin 的实例，这代表终端标准输入句柄的类型。
        // 调用 read_line 方法从标准输入句柄获取用户输入
        // & 表示这个参数是一个 引用。它像变量一样，默认是不可变的
        io::stdin().read_line(&mut guess)
            .expect("Failed to read line");

        // 不过 Rust 允许用一个新值来 隐藏 （shadow） guess 之前的值。这个功能常用在需要转换值类型之类的场景。它允许我们复用 guess 变量的名字
        // 字符串的 parse 方法 将字符串解析成数字
        // let guess: u32 = guess.trim().parse()
        //     .expect("Please type a number!");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };


        let x = 5;
        let y = 7;

        println!("x = {} and y = {}", x, y);

        // 第一个参数是格式化字符串，里面的 {} 是预留在特定位置的占位符。使用 {} 也可以打印多个值：第一对 {} 使用格式化字符串之后的第一个值，第二对则使用第二个值，依此类推
        println!("You guessed: {}", guess);

        // 使用一个 match 表达式，根据对 guess 和 secret_number 调用 cmp 返回的 Ordering 成员来决定接下来做什么。
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}
