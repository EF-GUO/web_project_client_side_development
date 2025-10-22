<script setup>
    import { ref } from 'vue';

    const form = ref({
        username:''
    })

</script>


<template>

    <div class="common-layout w-screen min-h-screen">
        <el-container class="w-screen min-h-screen flex flex-col">
        <el-header class="p-0 m-0">
            <el-menu
                :default-active="activeIndex"
                :background-color="'#5d4b33'"   
                :text-color="'#ffffff'"          
                :active-text-color="'#ffd08a'"   
                mode="horizontal"
                @select="handleSelect"
                class="justify-center"
            >
                <div class="w-[80px]"></div>
                <el-menu-item index="1">首页</el-menu-item>
                <el-sub-menu index="2">
                <template #title>商品分类</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="3">热销</el-menu-item>
                <el-menu-item index="4">新品</el-menu-item>
                <el-menu-item index="5">注册</el-menu-item>
                <el-menu-item index="6">登录</el-menu-item>
                <div class="w-800px"></div>
                <el-menu-item index="7"><el-icon><Search /></el-icon></el-menu-item>
                <el-menu-item index="8"><el-icon><ShoppingCart /></el-icon></el-menu-item>

            </el-menu>
        </el-header>
        <el-main class="flex flex-col items-center justify-start">
                <h1 class="text-yellow-500 text-6xl mt-80px font-serif">注册新用户</h1>

                <el-form 
                    :model="form" 
                    label-width="auto" 
                    class="mt-40px w-[600px] flex flex-col items-center"    
                >
                    <el-form-item aria-label="用户名" prop="username" class="!mb-0">
                        <div class="h-[26px]">
                            <span class="text-zinc-500">用户名</span>
                            <span class="text-red-500">*</span>
                        </div>
                        <el-input v-model="form.username" style="width: 600px" placeholder="请输入用户名" />
                    </el-form-item>


                    <el-form-item aria-label="邮箱" prop="email" class="!mb-0">
                        <div class="h-[26px]">
                            <span class="text-zinc-500">邮箱</span>
                            <span class="text-red-500">*</span>
                        </div>
                        <el-input v-model="form.useremail" style="width: 600px" placeholder="请输入邮箱" />
                    </el-form-item>

                    <el-form-item aria-label="密码" prop="password" class="!mb-0">
                        <div class="h-[26px]">
                            <span class="text-zinc-500">密码</span>
                            <span class="text-red-500">*</span>
                        </div>
                        <el-input v-model="form.useremail" style="width: 600px" placeholder="请输入密码" />
                    </el-form-item>

                    <el-form-item aria-label="收获人" prop="shouhuoren" class="!mb-0">
                        <div class="h-[26px]">
                            <span class="text-zinc-500">收获人</span>
                            <span class="text-red-500">*</span>
                        </div>
                        <el-input v-model="form.shouhuoren" style="width: 600px" placeholder="请输入收货人" />
                    </el-form-item>

                    <el-form-item aria-label="收获电话" prop="shouhuodianhua" class="!mb-0">
                        <div class="h-[26px]">
                            <span class="text-zinc-500">收获电话</span>
                        </div>
                        <el-input v-model="form.shouhuodianhua" style="width: 600px" placeholder="请输入收获电话" />
                    </el-form-item>

                    <el-form-item aria-label="收获地址" prop="shouhuodizhi" class="!mb-0">
                        <div class="h-[26px]">
                            <span class="text-zinc-500">收获地址</span>
                        </div>
                        <el-input v-model="form.shouhuodizhi" style="width: 600px" placeholder="请输入收获地址" />
                    </el-form-item>

                    <el-form-item class="mt-30px">
                        <el-button type="primary" @click="onSubmit" class="hover:bg-yellow-600 border-none focus:outline-none focus:ring-0 bg-yellow-500 w-[80px]">提交</el-button>
                    </el-form-item>

                    
                </el-form>

        </el-main>
        <el-footer class="w-screen bg-gray-100 h-[120px] flex items-center justify-center">
            <span>heima www.itcast.cn @ All rights Reseverd</span>
        </el-footer>
        </el-container>
    </div>


</template>



<style scoped>

</style>