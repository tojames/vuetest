<template>
    <div>

        <div v-bind:class="isRed?'red':'green'">单个class</div>
        <div :class="{'red':true,'big':true}">多个class</div>
        复杂情况，通过遍历，根据当前对象的成绩，匹配成绩和样式的清单对象，用成绩做key，取对象的value，最终返回字符串做样式名
        <ul>
            <li v-for="stu in stus" :class="{'A':'red','B':'green'}[stu.score]">
                {{stu.name}}
            </li>
        </ul>

    </div>
</template>

<script>
export default {
  name: 'App',
  data(){
            return {
                isRed:false,
                stus:[{name:'jack',score:'A'},{name:'rose',score:'B'}]
            }
        }
}
</script>

<style>
.red{
    background-color: red;
}
.green{
    background-color: green;
}
.big{
    font-size: 30px;
}
</style>
