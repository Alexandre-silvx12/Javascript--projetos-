
 Q01
cidade = "Angical do Piauí"
print(cidade)

 Q02
ano_turma = "Informática"
print(ano_turma)

 Q03
mensagem = "IFPI Campus Angical"
print(mensagem)

 Q04
matricula = 2026301
mensagem = "Sua matrícula é: " + str(matricula)
print(mensagem)

 Q05
nota_final = 8.5
print(nota_final)

 Q06
total_alunos = 35
print(total_alunos)

 Q07
a, b = 10, 20
print(a, b)

 Q08
pontos = 50
pontos += 1
print(pontos)

 Q09
frase = 'O IFPI é "excelente" para nossa formação.'
print(frase)

 Q11
idade = 18
if idade >= 18:
    print("Maior de idade")

 Q12
cidade = "Angical"
if cidade == "Angical":
    print("Você está no campus!")

 Q13
nota = 7.0
if nota >= 6.0:
    print("Aprovado!")
else:
    print("Reprovado!")

 Q14
nota = 9.5
if nota >= 9.0:
    print("Excelente / Destaque")
elif nota >= 6.0:
    print("Aprovado")
else:
    print("Reprovado")

 Q15
idade = int(input("Digite sua idade: "))
if idade >= 18:
    print("Pode votar.")
else:
    print("Não pode votar.")

 Q16
x = 10
if x > 5:
    print("Maior que 5")

 Q17
freq = 75
nota = 7
if freq >= 75 and nota >= 6:
    print("Aprovado por média e frequência")

 Q18
turno = "vespertino"
if turno == "matutino":
    print("Bom dia")
elif turno == "vespertino":
    print("Boa tarde")
else:
    print("Boa noite")

 Q19
x = 15
if x > 10 and x < 20:
    print("Está no intervalo")

 Q20
ativo = True
if ativo:
    print("Sistema Ativo")

 Q21
numero = 7
if numero % 2 == 0:
    print("Par")
else:
    print("Ímpar")

 Q23
contador = 1
while contador <= 5:
    print(contador)
    contador += 1

 Q24
for j in range(5):
    print(j)

 Q25
for i in range(1, 11):
    print(i)

 Q26
total = 0
for num in range(1, 101):
    total += num
print(total)

 Q27
fruta = ["maçã", "banana", "laranja"]
for f in fruta:
    print(f)

 Q28
x = 10
if x > 5:
    print("Ok")

 Q29
soma = 0
for i in range(1, 6):
    soma = soma + i
print(soma)

 Q30
n = 5
while n > 0:
    print(n)
    n -= 1

 Q31
for i in range(5):
    if i == 2:
        continue
    print(i)

 Q32
for i in range(1, 10):
    print(i)

 Q33
for i in range(2):
    for j in range(2):
        print(i, j)

  
 Q36
notas_turma = [7.5, 8.0, 9.0]
print(notas_turma[2])

 Q37
coordenadas = [-5.83, -42.67]
coordenadas[0] = -5.84
print(coordenadas)

 Q38
alunos = ["Ana", "Bruno"]
alunos.append("Carlos")
print(alunos)

 Q39
aluno = {"nome": "Maria", "curso": "Informática"}
print(aluno.get("turma", "Turma não cadastrada"))

 Q40
numeros = [10, 20, 30, 20]
numeros.remove(20)
print(numeros)

 Q41
matricula = 2026301
tamanho = len(str(matricula))
print(tamanho)

 Q42
lista1 = [1, 2, 3]
lista2 = lista1.copy()
lista2.append(4)
print(lista1)

 Q43
dados = {"id": 1, "status": "ativo"}
for k, v in dados.items():
    print(k, v)

 Q44
def calcular_imc(peso, altura):
    imc = peso / (altura ** 2)
    return imc

resultado = calcular_imc(65, 1.70)
print(resultado)

 Q45
def cadastrar():
    senha_interna = "12345"
    return senha_interna

senha = cadastrar()
print(senha)

 Q46
def conectar(ip, porta=80):
    print(f"Conectando em {ip}:{porta}")

conectar("192.168.1.1")

 Q47
try:
    valor = int(input("Digite um número: "))
    res = 10 / valor
    print(res)
except ValueError:
    print("Digite um número inteiro válido.")
except ZeroDivisionError:
    print("Não é possível dividir por zero.")
  
  Q48
def saudacao(nome):
    print("Olá, " + nome)

saudacao("Maria")

 Q49
contador_global = 0

def incrementar():
    global contador_global
    contador_global += 1

incrementar()
print(contador_global)

Q50
def fatorial(n):
    if n < 0:
        raise ValueError("Não existe fatorial de número negativo.")
    if n == 0 or n == 1:
        return 1
    return n * fatorial(n - 1)

print(fatorial(5))
