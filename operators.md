public class Main {
    public static void main(String[] args) {
        int num = 10;  // Initialization

        // Using various assignment operators
        num += 5;  // Equivalent to: num = num + 5;
        System.out.println("+= operator: " + num);  // Output: 15

        num -= 3;  // Equivalent to: num = num - 3;
        System.out.println("-= operator: " + num);  // Output: 12

        num *= 2;  // Equivalent to: num = num * 2;
        System.out.println("*= operator: " + num);  // Output: 24

        num /= 4;  // Equivalent to: num = num / 4;
        System.out.println("/= operator: " + num);  // Output: 6

        num %= 5;  // Equivalent to: num = num % 5;
        System.out.println("%= operator: " + num);  // Output: 1
    }
}

num = 10  # Initialization

# Using various assignment operators
num += 5  # Equivalent to: num = num + 5
print("+= operator:", num)  # Output: 15

num -= 3  # Equivalent to: num = num - 3
print("-= operator:", num)  # Output: 12

num *= 2  # Equivalent to: num = num * 2
print("*= operator:", num)  # Output: 24

num /= 4  # Equivalent to: num = num / 4
print("/= operator:", num)  # Output: 6

num %= 5  # Equivalent to: num = num % 5
print("%= operator:", num)  # Output: 1

Инкремент и декремент — это операции, используемые в программировании для увеличения или уменьшения значения переменной на единицу.

Инкремент — это операция, которая увеличивает значение переменной на 1. В программировании его часто обозначают как ++. Например, если переменная a равна 5, то после применения инкремента a++ или ++a, значение переменной станет 6.

Декремент — это операция, которая уменьшает значение переменной на 1. В программировании его обозначают как --. Например, если переменная b равна 5, то после применения декремента b-- или --b, значение переменной станет 4.

Теперь добавим в наш скрипт две функции: одну для инкремента, а другую для декремента.

 
Копировать
def increment(value):
    """Функция для инкремента значения."""
    return value + 1

def decrement(value):
    """Функция для декремента значения."""
    return value - 1

# Пример использования функций
if __name__ == "__main__":
    initial_value = 10
    print(f"Начальное значение: {initial_value}")
    
    incremented_value = increment(initial_value)
    print(f"После инкремента: {incremented_value}")

    decremented_value = decrement(initial_value)
    print(f"После декремента: {decremented_value}")