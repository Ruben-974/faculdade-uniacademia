import { useState } from 'react'
import { Alert, Box, Button, Container, Paper, Stack, TextField, Typography } from '@mui/material'

// Um componente próprio permite reutilizar a mesma configuração dos campos.
// A biblioteca cuida da aparência, enquanto o App controla os dados e a validação.
function CampoFormulario({ nome, rotulo, valor, aoAlterar, erro, tipo = 'text' }) {
    return (
        <TextField
            name={nome}
            label={rotulo}
            type={tipo}
            value={valor}
            onChange={aoAlterar}
            error={Boolean(erro)}
            helperText={erro || ' '}
            variant="outlined"
            fullWidth
            required
        />
    )
}

const camposVazios = { nome: '', matricula: '', curso: '', email: '' }

export default function App() {
    const [aluno, setAluno] = useState(camposVazios)
    const [erros, setErros] = useState({})
    const [mensagem, setMensagem] = useState('')

    function atualizarCampo(event) {
        const { name, value } = event.target
        setAluno({ ...aluno, [name]: value })
        setErros({ ...erros, [name]: '' })
        setMensagem('')
    }

    function validarDados() {
        const novosErros = {}
        if (!aluno.nome.trim()) novosErros.nome = 'Informe o nome.'
        if (!aluno.matricula.trim()) novosErros.matricula = 'Informe a matrícula.'
        else if (!/^\d+$/.test(aluno.matricula.trim())) novosErros.matricula = 'Use apenas números.'
        if (!aluno.curso.trim()) novosErros.curso = 'Informe o curso.'
        if (!aluno.email.trim()) novosErros.email = 'Informe o e-mail.'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(aluno.email.trim())) {
            novosErros.email = 'Digite um e-mail válido.'
        }
        setErros(novosErros)
        return Object.keys(novosErros).length === 0
    }

    function cadastrar(event) {
        event.preventDefault()
        setMensagem('')
        if (!validarDados()) return
        // Simulação de envio: não precisa recarregar a página.
        console.log('Aluno cadastrado:', aluno)
        setMensagem(`Aluno ${aluno.nome.trim()} cadastrado com sucesso!`)
        setAluno({ ...camposVazios })
        setErros({})
    }

    function cancelar() {
        setAluno({ ...camposVazios })
        setErros({})
        setMensagem('')
    }

    return (
        <Container maxWidth="sm" sx={{ py: 5 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Cadastro de Alunos
                </Typography>
                <Typography sx={{ mb: 3 }}>
                    Preencha os dados para realizar o cadastro.
                </Typography>
                <Box component="form" onSubmit={cadastrar} noValidate>
                    <Stack spacing={1}>
                        <CampoFormulario
                            nome="nome" rotulo="Nome completo"
                            valor={aluno.nome}
                            aoAlterar={atualizarCampo}
                            erro={erros.nome}
                        />
                        <CampoFormulario
                            nome="matricula" rotulo="Matrícula"
                            valor={aluno.matricula}
                            aoAlterar={atualizarCampo}
                            erro={erros.matricula}
                        />
                        <CampoFormulario
                            nome="curso" rotulo="Curso"
                            valor={aluno.curso}
                            aoAlterar={atualizarCampo}
                            erro={erros.curso}
                        />
                        <CampoFormulario
                            nome="email" rotulo="E-mail"
                            tipo="email" valor={aluno.email}
                            aoAlterar={atualizarCampo}
                            erro={erros.email}
                        />
                        {mensagem && <Alert severity="success">{mensagem}</Alert>}
                        <Stack direction="row" spacing={2}>
                            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
                            <Button type="button" variant="outlined" color="secondary" onClick={cancelar}>Cancelar</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Paper>
        </Container>
    )
}
