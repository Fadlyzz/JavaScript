/* eslint-disable no-unused-vars */
        // Array untuk menyimpan daftar tugas
        let taskList = [];

        // Fungsi untuk menambahkan tugas baru
        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const task = taskInput.value;
            if (task !== '') {
                taskList.push(task);
                taskInput.value = '';
                displayTasks();
            }
        }

        // Fungsi untuk menghapus tugas
        function deleteTask(index) {
            taskList.splice(index, 1);
            displayTasks();
        }

        // Fungsi untuk menampilkan daftar tugas
        function displayTasks() {
            const taskListContainer = document.getElementById('taskList');
            taskListContainer.innerHTML = '';

            if (taskList.length === 0) {
                taskListContainer.innerHTML = 'Tidak ada tugas yang perlu dilakukan.';
            } else {
                for (let i = 0; i < taskList.length; i++) {
                    const taskItem = document.createElement('li');
                    taskItem.innerHTML = taskList[i];
                    taskListContainer.appendChild(taskItem);

                    const deleteButton = document.createElement('button');
                    deleteButton.innerHTML = 'Hapus';
                    deleteButton.setAttribute('onclick', `deleteTask(${i})`);
                    taskItem.appendChild(deleteButton);
                }
            }
        }