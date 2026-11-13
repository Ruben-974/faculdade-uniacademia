import { useEffect, useState } from 'react'
import {
    Alert, Box, Button, Chip, CircularProgress, Container, Dialog,
    DialogActions, DialogContent, DialogTitle, FormControl, InputLabel,
    MenuItem, Paper, Select, Stack, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, TextField, Typography
} from '@mui/material'

// Componente reutilizável: recebe os dados e os eventos por props.
function LinhaAluno({ aluno, aoVisualizar, aoExcluir }) {
    return (
        <TableRow>
            <TableCell>{aluno.nome}</TableCell>
            <TableCell>{aluno.curso}</TableCell>
            <TableCell>
                <Chip label={aluno.situacao} color={aluno.situacao === 'Ativo' ? 'success' : 'default'} size="small" />
            </TableCell>
            <TableCell>
                <Stack direction="row" spacing={1}>
                    <Button size="small" variant="outlined" onClick={() => aoVisualizar(aluno)}>Visualizar</Button>
                    <Button size="small" variant="outlined" color="error" onClick={() => aoExcluir(aluno)}>Excluir</Button>
                </Stack>
            </TableCell>
        </TableRow>
    )
}

export default function App() {
    const [alunos, setAlunos] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')
    const [busca, setBusca] = useState('')
    const [situacao, setSituacao] = useState('Todas')
    const [ordem, setOrdem] = useState('asc')
    const [selecionado, setSelecionado] = useState(null)
    const [excluirAluno, setExcluirAluno] = useState(null)

    async function carregarAlunos() {
        setCarregando(true)
        setErro('')
        try {
            const resposta = await fetch('/alunos.json')
            if (!resposta.ok) throw new Error('Falha ao acessar o arquivo.')
            const dados = await resposta.json()
            if (!Array.isArray(dados)) throw new Error('Os dados recebidos são inválidos.')
            setAlunos(dados)
        } catch (falha) {
            setErro('Não foi possível carregar os alunos. ' + falha.message)
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        carregarAlunos()
    }, [])

    const alunosFiltrados = alunos.filter(function(aluno) {
        const encontrou = aluno.nome.toLowerCase().includes(busca.toLowerCase()) ||
            aluno.curso.toLowerCase().includes(busca.toLowerCase())
        const situacaoCorreta = situacao === 'Todas' || aluno.situacao === situacao
        return encontrou && situacaoCorreta
    }).sort(function(a, b) {
        return ordem === 'asc' ? a.nome.localeCompare(b.nome) : b.nome.localeCompare(a.nome)
    })

    function confirmarExclusao() {
        if (!excluirAluno) return
        setAlunos(alunos.filter(aluno => aluno.id !== excluirAluno.id))
        setExcluirAluno(null)
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography component="h1" variant="h4" gutterBottom>Consulta de Alunos</Typography>
            <Paper sx={{ p: 2, mb: 2 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <TextField
                        label="Buscar nome ou curso" value={busca}
                        onChange={event => setBusca(event.target.value)} fullWidth
                    />
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel id="rotuloSituacao">Situação</InputLabel>
                        <Select labelId="rotuloSituacao" label="Situação" value={situacao} onChange={event => setSituacao(event.target.value)}>
                            <MenuItem value="Todas">Todas</MenuItem>
                            <MenuItem value="Ativo">Ativo</MenuItem>
                            <MenuItem value="Inativo">Inativo</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel id="rotuloOrdem">Ordenar</InputLabel>
                        <Select labelId="rotuloOrdem" label="Ordenar" value={ordem} onChange={event => setOrdem(event.target.value)}>
                            <MenuItem value="asc">Nome A-Z</MenuItem>
                            <MenuItem value="desc">Nome Z-A</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="outlined" onClick={carregarAlunos}>Recarregar</Button>
                </Stack>
            </Paper>

            {carregando ? (
                <Box sx={{ textAlign: 'center', py: 4 }} role="status">
                    <CircularProgress /><Typography>Carregando alunos...</Typography>
                </Box>
            ) : erro ? (
                <Alert severity="error">{erro}</Alert>
            ) : alunos.length === 0 ? (
                <Alert severity="info">A lista de alunos está vazia.</Alert>
            ) : alunosFiltrados.length === 0 ? (
                <Alert severity="warning">Nenhum aluno corresponde à pesquisa ou ao filtro.</Alert>
            ) : (
                <TableContainer component={Paper}>
                    <Table aria-label="Tabela de alunos">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell><TableCell>Curso</TableCell>
                                <TableCell>Situação</TableCell><TableCell>Ações</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {alunosFiltrados.map(aluno => (
                                <LinhaAluno key={aluno.id} aluno={aluno}
                                    aoVisualizar={setSelecionado} aoExcluir={setExcluirAluno} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            <Dialog open={Boolean(selecionado)} onClose={() => setSelecionado(null)} fullWidth maxWidth="xs">
                <DialogTitle>Dados do aluno</DialogTitle>
                <DialogContent>
                    {selecionado && (
                        <Box>
                            <Typography>Nome: {selecionado.nome}</Typography>
                            <Typography>Curso: {selecionado.curso}</Typography>
                            <Typography>Situação: {selecionado.situacao}</Typography>
                        </Box>
                    )}
                </DialogContent>
                <DialogActions><Button onClick={() => setSelecionado(null)}>Fechar</Button></DialogActions>
            </Dialog>

            <Dialog open={Boolean(excluirAluno)} onClose={() => setExcluirAluno(null)}>
                <DialogTitle>Confirmar exclusão</DialogTitle>
                <DialogContent>
                    <Typography>Deseja excluir {excluirAluno?.nome}?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setExcluirAluno(null)}>Cancelar</Button>
                    <Button color="error" variant="contained" onClick={confirmarExclusao}>Excluir</Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}
