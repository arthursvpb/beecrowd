#include <iostream>
using namespace std;

int main()
{
    int x, alcool = 0, gasolina = 0, diesel = 0;

    while (1)
    {
        cin >> x;
        if (x == 1)
        {
            alcool++;
        }
        else if (x == 2)
        {
            gasolina++;
        }
        else if (x == 3)
        {
            diesel++;
        }
        else if (x == 4)
        {
            break;
        }
    }
    cout << "MUITO OBRIGADO\n"
         << "Alcool: " << alcool << "\n"
         << "Gasolina: " << gasolina << "\n"
         << "Diesel:  " << diesel << "\n";
    return 0;
}