
function mascaraCEP(input) {
    let value = input.value.replace(/\D/g, "");
    if (value.length > 8) value = value.slice(0, 8);
    if (value.length > 2) value = value.replace(/(\d{2})(\d)/, "$1.$2");
    if (value.length > 6) value = value.replace(/(\d{2})\.(\d{3})(\d)/, "$1.$2-$3");
    input.value = value;
}

function showToast(message, type = 'info') {
        const toastId = 'toast' + Date.now();
        let bg = 'bg-primary';
        let title = 'Aviso';
        let textColor = 'text-white';
        let btnClose = 'btn-close-white';
        if (type === 'success') {
                bg = 'bg-success';
                title = 'Sucesso';
        } else if (type === 'error') {
                bg = 'bg-danger';
                title = 'Erro';
        } else if (type === 'warning') {
                bg = 'bg-warning';
                title = 'Atenção';
                textColor = 'text-dark';
                btnClose = '';
        } else if (type === 'info') {
                bg = 'bg-info';
                textColor = 'text-dark';
                btnClose = '';
        }

        const toastHtml = `
        <div id="${toastId}" class="toast align-items-center ${bg} ${textColor} border-0 mb-2" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    <strong>${title}:</strong> ${message}
                </div>
                <button type="button" class="btn-close ${btnClose} me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>`;
        const container = document.getElementById('toastContainer');
        container.insertAdjacentHTML('beforeend', toastHtml);
        const toastEl = document.getElementById(toastId);
        const toast = new bootstrap.Toast(toastEl, { delay: 3500 });
        toast.show();
        toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
}

function buscarCEP() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep.length !== 8) {
        showToast("CEP inválido!", 'warning');
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                showToast("CEP não encontrado!", 'error');
                return;
            }
            document.getElementById('rua').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
            document.getElementById('pais').value = 'Brasil';

            // Preencher tipo de logradouro automaticamente
            if (data.logradouro) {
                const tipos = ['Rua', 'Avenida', 'Travessa', 'Alameda', 'Estrada', 'Outro'];
                let tipoDetectado = tipos.find(tipo => data.logradouro.toLowerCase().startsWith(tipo.toLowerCase()));
                if (!tipoDetectado && data.logradouro.trim() !== '') tipoDetectado = 'Outro';
                document.getElementById('tipo').value = tipoDetectado || '';
            }
            showToast("Endereço preenchido com sucesso!", 'success');
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
            showToast("Erro ao buscar CEP!", 'error');
        });
}

function mascaraTelefone(input) {
    let value = input.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 2) value = value.replace(/(\d{2})(\d)/, "($1) $2");
    if (value.length > 7) value = value.replace(/(\(\d{2}\) \d{5})(\d{1,4})/, "$1-$2");
    else if (value.length > 6) value = value.replace(/(\(\d{2}\) \d{4})(\d{1,4})/, "$1-$2");
    input.value = value;
}


function limparFormulario() {
    document.getElementById('formCEP').reset();
}

// Validação customizada do formulário
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formCEP');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let valid = true;
            // Número
            const numero = document.getElementById('numero').value.trim();
            if (!numero) {
                showToast('O número deve ser preenchido.', 'warning');
                valid = false;
            } else if (isNaN(numero)) {
                showToast('O número deve conter apenas dígitos.', 'warning');
                valid = false;
            }
            // Email
            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
                showToast('O e-mail deve ser preenchido.', 'warning');
                valid = false;
            } else if (!emailRegex.test(email)) {
                showToast('O e-mail deve ser válido.', 'warning');
                valid = false;
            }
            // Telefone
            const telefone = document.getElementById('telefone').value.replace(/\D/g, '');
            if (!telefone) {
                showToast('O telefone deve ser preenchido.', 'warning');
                valid = false;
            } else if (telefone.length < 10 || telefone.length > 11) {
                showToast('O telefone deve ser válido.', 'warning');
                valid = false;
            }
            // Campos não obrigatórios
            const complemento = document.getElementById('complemento').value.trim();
            const referencia = document.getElementById('referencia').value.trim();
            if (!complemento) {
                showToast('Campo Complemento não preenchido.', 'info');
            }
            if (!referencia) {
                showToast('Campo Referência não preenchido.', 'info');
            }
            if (valid) {
                showToast('Dados validados com sucesso!', 'success');
                // Aqui você pode enviar os dados ou prosseguir normalmente
                // form.submit(); // descomente se quiser submeter de verdade
            }
        });
    }
});