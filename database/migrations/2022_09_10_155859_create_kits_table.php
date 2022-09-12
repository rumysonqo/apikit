<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kits', function (Blueprint $table) {
            $table->id();
            $table->integer('cod_programa');
            $table->string('nom_programa',255);
            $table->string('programa',255);
            $table->integer('cod_meta');
            $table->string('nom_meta',255);
            $table->string('meta',255);
            $table->string('cod_subfin',7);
            $table->string('nom_subfin',255);
            $table->string('sub_finalidad',255);
            $table->string('cod_producto',7);
            $table->string('cod_actividad',7);
            $table->string('cod_clasificador',25);
            $table->string('nom_clasificador',255);
            $table->string('clasificador',255);
            $table->string('nivel',5);
            $table->string('tipo_bien',5);
            $table->integer('tipo_calculo');
            $table->string('cod_item_fam',12);
            $table->string('nom_item_fam',255);
            $table->string('item_fam',255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kits');
    }
}
