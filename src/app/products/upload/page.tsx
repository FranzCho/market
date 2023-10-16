"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ProductUploadPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      descripton: "",
      category: "",
      latitude: "33.5563",
      logititude: "126.79581",
      imageSrc: "",
      price: 1,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {};

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <Heading title="Product upload" subtitle="상품을 등록하세요" />
          <Input
            id="title"
            label="title"
            disabled={isLoading}
            errors={errors}
            register={register}
            required
          />
          <hr />
          <Input
            id="description"
            label="Description"
            disabled={isLoading}
            errors={errors}
            register={register}
            required
          />
          <hr />
          <Input
            id="price"
            label="Price"
            formatPrice
            disabled={isLoading}
            errors={errors}
            register={register}
            required
          />
          <hr />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
            {/* Category */}
          </div>
          <hr />
          {/* KaKaomap */}

          <Button label="상품 생성하기" />
        </form>
      </div>
    </Container>
  );
};

export default ProductUploadPage;