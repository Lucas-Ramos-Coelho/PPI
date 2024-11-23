import { useState } from "react";
import "../Buttons/buttons.css";

function Buttons() {
  const [modalOpen, setModalOpen] = useState(null);

  const handleOpenModal = (modal) => {
    setModalOpen(modal); // Define qual modal será exibido
  };

  const handleCloseModal = () => {
    setModalOpen(null); // Fecha o modal
  };

  return (
    <div className="buttons">
      {/* Botões */}
      <div className="button" onClick={() => handleOpenModal("update")}>
        <h3>Atualizar dados do idoso</h3>
      </div>
      <div className="button" onClick={() => handleOpenModal("reminder")}>
        <h3>Adicionar novo lembrete</h3>
      </div>
      <div className="button" onClick={() => handleOpenModal("reports")}>
        <h3>Relatórios</h3>
      </div>
      <div className="button" onClick={() => handleOpenModal("events")}>
        <h3>Registrar eventos diários</h3>
      </div>

      {/* Modais */}
      {modalOpen === "update" && (
        <Modal onClose={handleCloseModal}>
          <h2>Atualizar Dados do Idoso</h2>
          <form>
            <label>
              Nome: <input type="text" name="name" />
            </label>
            <label>
              Idade: <input type="number" name="age" />
            </label>
            <label>
              Tipo Sanguíneo: <input type="text" name="bloodType" />
            </label>
            <label>
              Estado Civil:{" "}
              <select name="maritalStatus">
                <option>Solteiro</option>
                <option>Casado</option>
                <option>Viúvo</option>
                <option>Divorciado</option>
              </select>
            </label>
            <label>
              Sexo:{" "}
              <select name="gender">
                <option>Masculino</option>
                <option>Feminino</option>
                <option>Outro</option>
              </select>
            </label>
            <label>
              Peso: <input type="number" step="0.1" name="weight" /> kg
            </label>
            <label>
              Altura: <input type="number" step="0.01" name="height" /> m
            </label>
            <label>
              Alergias: <textarea name="allergies"></textarea>
            </label>
            <label>
              Doenças Crônicas: <textarea name="chronicDiseases"></textarea>
            </label>
            <label>
              Contato de Emergência:{" "}
              <input type="text" name="emergencyContact" />
            </label>
            <label>
              Médico Responsável: <input type="text" name="doctor" />
            </label>
            <label>
              Medicamentos: <textarea name="medications"></textarea>
            </label>
            <label>
              Endereço Completo: <input type="text" name="address" />
            </label>
            <label>
              Preferências Alimentares:{" "}
              <textarea name="foodPreferences"></textarea>
            </label>
            <label>
              Hobbies: <textarea name="hobbies"></textarea>
            </label>
            <label>
              Mobilidade:{" "}
              <select name="mobility">
                <option>Independente</option>
                <option>Com auxílio (bengala, andador)</option>
                <option>Cadeira de Rodas</option>
              </select>
            </label>
            <button type="submit">Salvar</button>
          </form>
        </Modal>
      )}

      {modalOpen === "reminder" && (
        <Modal onClose={handleCloseModal}>
          <h2>Adicionar Novo Lembrete</h2>
          <form>
            <label>
              Título: <input type="text" name="title" />
            </label>
            <label>
              Data: <input type="date" name="date" />
            </label>
            <button type="submit">Salvar</button>
          </form>
        </Modal>
      )}

      {modalOpen === "reports" && (
        <Modal onClose={handleCloseModal}>
          <h2>Relatórios</h2>
          <p>Visualize e exporte relatórios aqui.</p>
        </Modal>
      )}

      {modalOpen === "events" && (
        <Modal onClose={handleCloseModal}>
          <h2>Registrar Eventos Diários</h2>
          <form>
            <label>
              Evento: <input type="text" name="event" />
            </label>
            <button type="submit">Salvar</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

// Componente Modal
function Modal({ children, onClose }) {
  // Função para fechar ao clicar fora do modal
  const handleBackdropClick = (event) => {
    if (event.target.className === "modal-backdrop") {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Buttons;
