fn main() {
    // 使用大型数据结构时，适当地使用可变变量，可能比复制和返回新分配的实例更快。对于较小的数据结构，总是创建新实例，采用更偏向函数式的编程风格，可能会使代码更易理解，为可读性而牺牲性能或许是值得的。
    let mut x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    // Rust 常量的命名规范是使用下划线分隔的大写字母单词，并且可以在数字字面值中插入下划线来提升可读性

    // mut 不能改变变量的类型
    // let 再次使用 let 时，实际上创建了一个新变量，我们可以改变值的类型，但复用这个名字
    const MAX_POINTS: u32 = 100_100;

    let x = 2.0;

    let y: f32 = 3.0;

    let z = 'z';

    let c = 'c';

    let heart_eyed_cat = '😻';

    let tup: (i32, f64, u8) = (500, 6.4, 1);
    // tup 变量绑定到整个元组上，因为元组是一个单独的复合元素。为了从元组中获取单个值，可以使用模式匹配（pattern matching）来解构（destructure）元组值
    let (q, w, e) = tup;

    println!("The value of w is: {}", w);

    let p: (i32, f64, u8) = (500, 6.4, 1);

    let five_hundred = p.0;

    let six_point_four = p.1;

    let one = p.2;

    let p = 5;

    let l = {
        let p = 3;
        p + 1
    };

    // 如果在表达式的结尾加上分号，它就变成了语句，而语句不会返回值
    println!("The value of l is: {}", l);


    let guess: u32 = '43'.parse().expect("Not a number!");
    println!("The value of x is: {}", x);
}

// 函数可以向调用它的代码返回值。我们并不对返回值命名，但要在箭头（->）后声明它的类型。在 Rust 中，函数的返回值等同于函数体最后一个表达式的值。使用 return 关键字和指定值，可从函数中提前返回；但大部分函数隐式的返回最后的表达式。
fn five() -> i32 {
    5
}

fn plus_one(x: i32) -> i32 {
    x + 1
}