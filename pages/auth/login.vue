<script setup lang="ts">
import { useToast } from "primevue/usetoast";

const pocketbase = usePocketbase();
const email = ref<string | null>(null);
const password = ref<string | null>(null);
const remeberMe = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const toast = useToast();

// Login user
async function login() {
    isLoading.value = true;
    if (email && password) {
        await pocketbase
            .collection("users")
            .authWithPassword(email.value as string, password.value as string)
            .then((user) => {
                navigateTo("/");
            })
            .catch((error) => {
                console.log(error);
                toast.add({
                    severity: "error",
                    summary: "Error",
                    detail: "Invalid email or password",
                    life: 3000,
                });
            });
    }
    isLoading.value = false;
    return;
}
</script>

<template>
    <div class="card m-auto  flex flex-wrap justify-content-center gap-3">
        <InputText v-model="email" placeholder="email" />
        <InputText v-model="password" placeholder="password" />
    </div>
</template>
