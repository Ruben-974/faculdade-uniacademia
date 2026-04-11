# A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:
# a) média do salário da população;
# b) média do número de filhos;
# c) maior salário;
# d) percentual de pessoas com salário até R$1000,00.
# O final da leitura de dados se dará com a entrada de um salário negativo. 

salary = 0
total_salary = 0
total_childrens = 0
salary_up_to_thousand = 0
persons = 0

while salary >= 0:

    salary = int(input('What is your salary? '))

    if salary >= 0:

        if persons == 0:

            highest_salaty = salary
        
        else: 

            if salary > highest_salaty:
                highest_salaty = salary

        persons = persons + 1

        total_salary = total_salary + salary

        if salary <= 1000:

            salary_up_to_thousand = salary_up_to_thousand + 1

        number_of_childrens = int(input('Number of childrens: '))
        
        if number_of_childrens > 0:
            
            total_childrens = total_childrens + number_of_childrens
        
print(f'The average salary is: {total_salary/persons}')
print(f'The average number of children is: {total_childrens/persons}')
print(f'The highest salary is: {highest_salaty}')
if salary_up_to_thousand != 0:
    print(f'the percentage of people with households less than a thousand: {100/(persons/salary_up_to_thousand)}%')
else:
    print(f'the percentage of people with households less than a thousand: 0%')



   
