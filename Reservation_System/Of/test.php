<style>
  .grid-cell {
    background-color: #eee;
    padding: 2px;
    border: 1px solid #ddd;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid-cell.selected {
    background-color: #ccc;
  }
</style>

<div class="grid-container">
  <?php for ($i = 1; $i <= 31; $i++) { ?>
  <div class="grid-cell" id="cell-<?php echo $i ?>"></div>
  <?php } ?>
</div>

<script>
  const gridCells = document.querySelectorAll('.grid-cell');

  gridCells.forEach(cell => {
    cell.addEventListener('click', () => {
      // Remover selección anterior
      document.querySelector('.selected')?.classList.remove('selected');

      // Agregar selección nueva
      cell.classList.add('selected');
    });
  });
</script>